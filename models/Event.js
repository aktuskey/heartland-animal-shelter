const keystone = require('keystone')
const Types = keystone.Field.Types

const Event = new keystone.List('Event', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' }
})

Event.add({
	title: {
		type: Types.Text,
		required: true,
		initial: true
	},
	date: {
		type: Types.Datetime,
		utc: true,
		required: true,
		default: Date.now
	},
	location: {
		type: Types.Location,
		initial: true,
		required: true
	}
})

Event.register()