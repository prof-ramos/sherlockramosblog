import { getPayload } from 'payload'
import config from '../src/payload.config'
import { closePayload } from '../src/shutdown'

// A senha entra somente por variável de ambiente ou stdin, nunca por argumentos.
let password = process.env.ADMIN_PASSWORD || ''
if (!password && !process.stdin.isTTY) for await (const chunk of process.stdin) password += chunk
password = password.trim()
if (password.length < 16) throw new Error('Forneça uma senha de pelo menos 16 caracteres por stdin ou ADMIN_PASSWORD.')
const payload = await getPayload({ config })
try {
  const email = process.env.ADMIN_EMAIL!.toLowerCase()
  const existing = await payload.find({ collection: 'users', limit: 1 })
  if (existing.totalDocs) {
    if (!process.argv.includes('--reset-password')) throw new Error('Administrador já existe. Use --reset-password para recuperar o acesso.')
    if (existing.docs[0].email !== email) throw new Error('A conta existente difere de ADMIN_EMAIL.')
    await payload.update({ collection: 'users', id: existing.docs[0].id, data: { password } })
    console.log('Senha administrativa atualizada.')
  } else {
    await payload.create({ collection: 'users', context: { bootstrap: true }, data: { email, password, name: 'Sherlock Ramos' } })
    console.log('Administrador criado. Cadastro público permanece bloqueado.')
  }
} finally { await closePayload(payload) }
