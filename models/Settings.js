const keystone = require('keystone')
const Types = keystone.Field.Types

const typeOptions = ['Homepage', 'About']

const Settings = new keystone.List('Settings', {})

Settings.add({
		name: {
			type: Types.Text,
			required: true,
			default: 'Settings'
		},
		type: {
			type: Types.Select,
			options: typeOptions,
			hidden: true,
			required: true,
			initial: true
		},
	},

	{ heading: 'Homepage Settings', dependsOn: { type: 'Homepage' } }, {
		introImage: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'http://res.cloudinary.com/dva1sf6ie/image/upload/v1502471094/home-hero_nwujgg.png'
		},
		introHeadline: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'Open your heart to Heartland Animal Shelter'
		},
		introLabel: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'Adopt Today'
		},
		logo: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'http://res.cloudinary.com/dva1sf6ie/image/upload/v1502472413/logo_nthsap.png'
		},
		aboutUs: {
			type: Types.Html,
			wysiwyg: true,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'To find permanent, loving homes for homeless animals and promote responsible pet ownership through education, community outreach and collaboration while maintaining respect and compassion for all creatures.'
		},
		eventHeader: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'Upcoming Events'
		},
		events: {
			type: Types.Relationship,
			ref: 'Event',
			dependsOn: { type: 'Homepage' },
			many: true
		},
		donateLabel: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'Donate'
		},
		volunteerImage: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'https://static1.squarespace.com/static/57ec4946f5e231ada41c3a6c/57ecb4f646c3c4bb2967673e/57ef1a60e4fcb5606cb8a7f7/1475290582964/HallieHill-ScreenGrab21.jpg?format=2500w'
		},
		volunteerBlurb: {
			type: Types.Html,
			wysiwyg: true,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'As a volunteer, you are helping Heartland Animal Shelter save thousands of unwanted cats and dogs, giving them the opportunity to find loving new homes.  Your contribution of time and effort is greatly appreciated.  Thank you for being a part of this important effort on behalf of companion animals.  You are making a difference!'
		},
		volunteerLabel: {
			type: Types.Text,
			required: true,
			dependsOn: { type: 'Homepage' },
			default: 'Volunteer'
		}
	}
)

Settings.register()