import mongoose from 'mongoose';
const pinSchema = mongoose.Schema({//뼈대생성
	userid: String,
	lat: Number,
	lng: Number,
	data: { type: Date, default: Date.now  },
	tag: String, // how does input multiple tag?
	image: Buffer
});
const Pin = mongoose.model('PinModel',pinSchema)//PinModel:(mongo db collection)생성

export default mongoose.model('pin', pinSchema);