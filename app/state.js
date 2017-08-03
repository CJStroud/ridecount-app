export default {
  parks: {
    all: [1],
    byId: {
      id: 1,
      name: 'Disney World Florida'
    }
  },
  stats: {
    ridecount: 0
  },
  rides: {
    all: [1],
    byId: {
      parkId: 1,
      id: 1,
      name: 'Example Ride'
    }
  },
  trips: {
    all: [1],
    byId: {
      id: 1,
      parkId: 1,
      name: 'Trip to Disney',
      rides: [
        { rideId: 1, count: 5 }
      ]
    }
  },
  user: {
    email: null,
    name: null
  }
}
