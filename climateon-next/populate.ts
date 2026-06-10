import { getPayload } from 'payload'
import config from './payload.config'

async function populate() {
  const payload = await getPayload({ config })

  // Check if categories exist
  let { docs: categories } = await payload.find({
    collection: 'categories',
  })

  if (categories.length === 0) {
    console.log('Creating categories...')
    const catIklim = await payload.create({
      collection: 'categories',
      data: { name: 'Iklim Dijelaskan' },
    })
    const catData = await payload.create({
      collection: 'categories',
      data: { name: 'Data Story' },
    })
    const catBedah = await payload.create({
      collection: 'categories',
      data: { name: 'Bedah Paper' },
    })
    categories = [catIklim, catData, catBedah]
  }

  // Create mock posts
  console.log('Creating posts...')
  await payload.create({
    collection: 'posts',
    data: {
      title: 'Memahami Perubahan Suhu Global',
      category: categories.find(c => c.name === 'Iklim Dijelaskan')!.id,
      description: 'Bagaimana tren suhu bumi berubah dalam 100 tahun terakhir?',
      image: '/assets/topics/iklim.jpg'
    }
  })

  await payload.create({
    collection: 'posts',
    data: {
      title: 'Dampak El Nino 2023',
      category: categories.find(c => c.name === 'Data Story')!.id,
      description: 'Menganalisis dampak fenomena cuaca yang tidak terduga terhadap produksi pangan lokal.',
      image: '/assets/topics/cuaca-and-iklim.jpg'
    }
  })

  await payload.create({
    collection: 'posts',
    data: {
      title: 'Analisis Curah Hujan Ekstrem',
      category: categories.find(c => c.name === 'Bedah Paper')!.id,
      description: 'Ulasan paper tentang peningkatan frekuensi hujan ekstrem.',
      image: '/assets/topics/atmosfer.jpg'
    }
  })

  console.log('Populated successfully!')
  process.exit(0)
}

populate().catch(console.error)
