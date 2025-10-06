const mongoose = require('mongoose');

const medicalScanSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  patientName: { type: String, required: true },
  scanType: { type: String, required: true },
  fileName: { type: String, required: true },
  fileSize: { type: Number },
  filePath: { type: String },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { 
    type: String, 
    enum: ['uploaded', 'processing', 'analysis_complete', 'doctor_reviewed'], 
    default: 'uploaded' 
  },
  aiResults: {
    confidence: { type: Number },
    findings: [{ type: String }],
    recommendations: [{ type: String }],
  },
  doctorNotes: { type: String },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewedAt: { type: Date },
}, {
  timestamps: true,
});

module.exports = mongoose.model('MedicalScan', medicalScanSchema);
