import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  show (songId) {
    return Api().post('songs' + songId)
  }
}
