const { User } = require('../models')

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                user: user
            })

        } catch (error) {
            res.status(500).send({
                error: 'Something went wrong.'
            })
        }

    }
}