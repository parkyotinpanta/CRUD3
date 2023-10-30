const Product = require('../Models/Product')


exports.read = async (req, res) => {
    try {
        const id = req.params.id
        const producted = await Product.findOne({ _id: id }).exec()
        res.send(producted)
    } catch {
        console.log(err)
        res.send(500).send('Server Error')
    }
}
exports.list = async (req, res) => {
    try {
        const producted = await Product.find({}).exec()
        res.send(producted)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.create = async (req, res) => {
    try {
        const producted = await Product(req.body).save()
        res.send(producted)
    } catch {
        console.log(err)
        res.status(500).send('Create Error')
    }
}
exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const updeted = await Product
            .findOneAndUpdate({ _id: id }, req.body, { new: true })
            .exec()
        res.send(updeted)
    } catch (err) {
        console.log(err)
        res.status(500).send('Updete Error')
    }
}
exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const remove = await Product
        .findOneAndDelete({ _id: id })
        .exec()
        res.send(remove)
    } catch (err) {
        console.log(err)
        res.status(500).send('delete Error')
    }
}