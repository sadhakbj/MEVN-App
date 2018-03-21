const {
    Song
} = require('../models')

module.exports = {
    /**
     * Get all the songs.
     * @param {*} req 
     * @param {*} next 
     */
    async index(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.status(200).json({
                success: true,
                songs: songs
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error
            })
        }
    },
    /**
     * Create a new instance of song.
     */
    async store(req, res) {
        try {
            const song = await Song.create(req.body)
            res.status(200).json({
                success: true,
                song: song
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Unable to create new song.' + error
            })
        }
    }
}