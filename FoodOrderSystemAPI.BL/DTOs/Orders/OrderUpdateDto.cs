﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderSystemAPI.BL.DTOs
{
    public class OrderUpdateDto
    {
        public int OrderId { get; set; }

        public int TotalPrice { get; set; }
    }
}
