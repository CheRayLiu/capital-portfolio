module.exports = (mongoose, mongoosePaginate, autoIncrement) => {
  const schema = mongoose.Schema(
    {
      companyName: {
        type: String,
        required: true,
      },
      roundInvested: {
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
  schema.plugin(autoIncrement.plugin, {
    model: 'portfolioCompany',
    field: 'companyId',
  });

  const PortfolioCompany = mongoose.model('portfolioCompany', schema);
  return PortfolioCompany;
};
