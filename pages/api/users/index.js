import dbConnect from '../../../utils/db';
import data from '../../../utils/data';
import User from '../../../models/User';

export default async function handler(req, res) {
  try {
    await dbConnect();
    const user = await User.create(data.users);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}
