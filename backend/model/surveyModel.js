import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to the user
  basicInfo: {
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Non-binary', 'Prefer not to say'], required: true },
    location: { type: String, required: true },
  },
  relationshipPreferences: {
    lookingFor: [{ type: String, enum: ['Serious Relationship', 'Casual Dating', 'Friendship', 'Just Exploring'] }],
    preferredAgeRange: { min: { type: Number }, max: { type: Number } },
    preferredLocation: { type: String, enum: ['Same City', 'Any Location', 'Specific Region'] },
  },
  personalityInterests: {
    personalityType: { type: String, enum: ['Introvert', 'Extrovert', 'Ambivert'] },
    favoriteActivities: [{ type: String }],
    loveLanguage: { type: String, enum: ['Words of Affirmation', 'Physical Touch', 'Quality Time', 'Acts of Service', 'Gifts'] },
  },
  datingPreferences: {
    smokes: { type: Boolean },
    drinks: { type: Boolean },
    longDistanceOk: { type: Boolean },
    dealbreaker: { type: String },
  },
});

const Survey = mongoose.model('Survey', surveySchema);
export default Survey