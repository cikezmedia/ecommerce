import dbConnect from '../../../utils/db';
import data from '../../../utils/data';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  try {
    await dbConnect();
    const product = await Product.create(data.product);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
}
