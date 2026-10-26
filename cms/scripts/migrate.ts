import { getPayload } from 'payload'
import config from '../src/payload.config'
import { closePayload } from '../src/shutdown'

const payload = await getPayload({ config })
try {
  await payload.db.migrate()
} finally { await closePayload(payload) }
