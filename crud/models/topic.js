const { Schema, default: mongoose } = require("mongoose");

const topicSchema = new Schema(
    {
title: String,
description: String
},
{
    timestamps: true
}
)

const Topic =mongoose.models.Topic || mongoose.model("topic", topicSchema)

export default Topic