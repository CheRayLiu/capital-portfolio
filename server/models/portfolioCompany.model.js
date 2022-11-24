module.exports = (mongoose, mongoosePaginate) => {
  const schema = mongoose.Schema(
    {
      companyId: {
        type: Number,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      roundIntvested: {
        type: String,
        enum: [
          'Pre-seed',
          'Seed',
          'Series A',
          'Series B',
          'Series C',
          'Series D',
          'Series E',
          'Series F',
        ],
        default: 'N/A',
      },
      amount: {
        type: Number,
        min: 0,
        required: true,
      },
      valuationAtRaise: {
        type: Number,
        min: 0,
        required: true,
      },
      dateOfRaise: {
        type: Date,
        required: true,
      },
      equityPercent: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
      },
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const PortfolioCompany = mongoose.model('portfolioCompany', schema);
  return PortfolioCompany;
};
