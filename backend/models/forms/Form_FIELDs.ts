export const PersonalDetailsSchema = {
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
};

export const BusinessDetailsSchema = {
  company: { type: String, required: true },
  tagline: { type: String },
  industry: { type: String, required: true },
  niche: { type: String, required: true },
};

export const StyleDetailsSchema = {
  colors: { type: [String], required: true },
  font: { type: String, required: true },
};
