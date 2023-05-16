﻿namespace FoodOrderSystemAPI;

public class ReviewRepo : EntityRepo<ReviewModel>, IReviewRepo
{
    public ReviewRepo(SystemContext dbContext) : base(dbContext)
    {
    }
}
