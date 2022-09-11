import moment from 'moment'
import 'moment/locale/ru'

export const lastActivityDate = (lastActivity) => {
  return moment(new Date(lastActivity)).startOf(['hour']).fromNow()
}

export const skeletonRandomMessage = (length) => {
  const skeletonArray = []

  for (let i = 0; i < length; i++) {
    skeletonArray.push(Math.floor(Math.random() * 100))
  }

  return skeletonArray
}
