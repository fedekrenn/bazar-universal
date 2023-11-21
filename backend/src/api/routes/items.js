import { Router } from 'express'
import Item from '../../model/Item.js'

const itemRouter = Router()
const itemContainer = new Item()

itemRouter.get('/', async (req, res) => {
  const { q } = req.query

  if (q) {
    const result = await itemContainer.getItemsByCategory(q)
    res.status(200).json(result)
  } else {
    const result = await itemContainer.getItems()
    res.status(200).json(result)
  }
})

itemRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await itemContainer.getItemById(parseInt(id))

  if (!result) {
    res.status(404).json({ error: 'Not product found' })
  } else {
    res.status(200).json(result)
  }
})

export default itemRouter
