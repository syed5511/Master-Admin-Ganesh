const subscriptions = {
  contentType: "accordion",
  list: [
    {
      subscription_details: [
        {
          key: "subscription_date",
          label: "Subscribed",
          value: "05/17/2020",
          func: "outer_header",
        },
        {
          key: "stripe_invoice",
          label: "Stripe invoice #",
          value: "23456778889900",
          func: "outer_header_orange",
        },
        {
          key: "serving_plan",
          label: "Serving Plan",
          value: "4 person Plan",
          func: "outer_header",
        },
        {
          key: "complimentary_plates",
          label: "Complimentary Plates",
          value: "2 Plates",
          func: "outer_header",
        },
        {
          key: "available_plate",
          label: "Avl Plates",
          value: "6 Plates",
          func: "outer_header",
        },
      ],
      orders: [
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      subscription_details: [
        {
          key: "subscription_date",
          label: "Subscribed",
          value: "05/17/2020",
          func: "outer_header",
        },
        {
          key: "stripe_invoice",
          label: "Stripe invoice #",
          value: "23456778889900",
          func: "outer_header_orange",
        },
        {
          key: "serving_plan",
          label: "Serving Plan",
          value: "4 person Plan",
          func: "outer_header",
        },
        {
          key: "complimentary_plates",
          label: "Complimentary Plates",
          value: "2 Plates",
          func: "outer_header",
        },
        {
          key: "available_plate",
          label: "Avl Plates",
          value: "6 Plates",
          func: "outer_header",
        },
      ],
      orders: [
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      subscription_details: [
        {
          key: "subscription_date",
          label: "Subscribed",
          value: "05/17/2020",
          func: "outer_header",
        },
        {
          key: "stripe_invoice",
          label: "Stripe invoice #",
          value: "23456778889900",
          func: "outer_header_orange",
        },
        {
          key: "serving_plan",
          label: "Serving Plan",
          value: "4 person Plan",
          func: "outer_header",
        },
        {
          key: "complimentary_plates",
          label: "Complimentary Plates",
          value: "2 Plates",
          func: "outer_header",
        },
        {
          key: "available_plate",
          label: "Avl Plates",
          value: "6 Plates",
          func: "outer_header",
        },
      ],
      orders: [
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
        {
          header_details: [
            {
              key: "order_id",
              label: "Order #",
              value: "6789009999",
              func: "order_id",
            },
            {
              key: "delivery_date",
              label: "Delivery Date",
              value: "05/17/2020",
              func: "delivery_date",
            },
            {
              key: "delivery_time_slot",
              label: "Delivery Time Slot",
              value: "01:30 pm",
              func: "delivery_time_slot",
            },
            {
              key: "delivery_time",
              label: "Delivery Time",
              value: "01:25 pm",
              func: "delivery_time",
            },
          ],
          body_details: [
            {
              key: "items",
              func: "food_items",
              value: [
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
                {
                  item_name: "Chicken Biryani chicken",
                  quantity: "200 ML",
                  type: "Main course",
                  image: "",
                },
              ],
            },
            {
              key: "delivery_details",
              func: "details",
              details: [
                {
                  key: "delivery_address",
                  label: "Delivery address",
                  value: "6789 Michigan ave ,Chicago ,Il",
                },
                {
                  key: "address_type",
                  label: "Address Type",
                  value: "Office",
                },
                {
                  key: "notes",
                  label: "Notes",
                  value: "Please knock the door when you come.",
                },
              ],
            },
            {
              key: "kitchen_details",
              func: "details",
              details: [
                {
                  key: "kitchen_name",
                  label: "Kitchen Name",
                  value: "Syed Kitchen",
                },
                {
                  key: "kitchen_city",
                  label: "Kitchen City",
                  value: "Chicago",
                },
              ],
            },
            {
              key: "feedback_details",
              func: "details",
              details: [
                {
                  key: "feedback_food",
                  label: "Feedback Food",
                  value: "Very Tasty Food",
                },
                {
                  key: "feedback_delivery",
                  label: "Feedback Delivery",
                  value: "Dint delivery on time",
                },
              ],
            },
            {
              key: "chef_details",
              func: "details",
              details: [
                {
                  key: "chef_name",
                  label: "Chef Name",
                  value: "Michael Han",
                },
              ],
            },
            {
              key: "driver_details",
              func: "details",
              details: [
                {
                  key: "driver_name",
                  label: "Delivery Driver",
                  value: "Taylor",
                },
                {
                  key: "driver_id",
                  label: "Driver #",
                  value: "2234",
                },
                {
                  key: "order_pickup_at",
                  label: "Order Pickup Time",
                  value: "12:25 pm",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default subscriptions;
