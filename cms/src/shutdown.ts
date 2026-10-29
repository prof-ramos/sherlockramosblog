import type { Payload } from 'payload'

// O destroy genérico do adaptador Drizzle limpa o esquema, mas não fecha o
// cliente libSQL. Comandos e testes precisam encerrar também essa conexão.
export async function closePayload(payload: Payload) {
  const client: unknown = payload.db.client
  if (!client || typeof client !== 'object' || !('close' in client) || typeof client.close !== 'function') {
    throw new Error('Cliente libSQL não inicializado.')
  }
  await payload.destroy()
  client.close()
}
