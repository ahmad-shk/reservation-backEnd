const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Product name is required"] 
    },
    price: { 
        type: Number, 
        required: [true, "Product price is required"] 
    },
    category: { 
        type: String, 
        required: [true, "Product category is required"] 
    },
    image: { 
        type: String, 
        required: [true, "Product image URL is required"] 
    },
    description: { 
        type: String, 
        required: [true, "Product description is required"] 
    },
    isAvailable: { 
        type: Boolean, 
        required: [true, "Availability status is required"],
        default: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);