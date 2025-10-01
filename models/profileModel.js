import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
    {
    displayName: {
        type: String,
        required: [true, "Display name is required"]
    },
    profilePicture: {
        type: String,
        required: [true, "Profile picture is required"]
    },
    bio: {
        type: String,
        minlength: [10, "Bio must be at least 10 characters"],
        maxlength: [150, "Bio cannot exceed 150 characters"],
        required: [true, "Bio is required"],
        trim: true
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    },{
        timestamps: true
    }
);

const ProfileModel = mongoose.model('Profile', profileSchema);
export default ProfileModel;
