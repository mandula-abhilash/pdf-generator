export const report = {
  _id: {
    $oid: "645347ca4bfedf1c37b9f52b",
  },
  title: "Report testing after datasets reprojection to 4326",
  constraintName: "All Constraints",
  address: "38 Dartmouth Rd, Cannock WS11 1HF, UK",
  author: "Abhilash Mandula",
  siteOverview: {
    region: "West Midlands",
    county: "Staffordshire",
    local_authority: "Cannock Chase Lpa",
    ward: "Cannock West",
    parish: "",
  },
  createdBy: {
    $oid: "612dc8120ab9cb0abc81b689",
  },
  datasets: [
    {
      image:
        "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/country_parks.png",
      name: "Country Parks",
      group: "Land Designations",
      riskLevel: {
        current: 0,
        automated: "Low Risk",
        customized: "",
      },
      message: {
        automated:
          'The nearest Country Park to your selected location is <span class="text-havelock-blue-500">Cannock Chase</span>, located more than <span class="text-havelock-blue-500">5.3 km</span> away',
      },
      importance: {
        number: 3,
        value: "Medium",
      },
      _id: {
        $oid: "645347ca4bfedf1c37b9f52c",
      },
    },
    {
      image:
        "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/local_authority.png",
      name: "Local Authority",
      group: "Boundaries",
      provider: {
        name: "Office for National Statistics",
        url: "https://www.ons.gov.uk/",
        attribution: "Office for National Statistics",
      },
      riskLevel: {
        current: 0,
        automated: "Not Applicable",
        customized: "",
      },
      message: {
        automated:
          'The selected location is within the <span class="text-havelock-blue-500">Cannock Chase Lpa</span> Local Authority',
      },
      importance: {
        number: 1,
        value: "Very Low",
      },
      _id: {
        $oid: "645347ca4bfedf1c37b9f52d",
      },
    },
    {
      image:
        "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/heritage_coasts.png",
      name: "Heritage Coasts",
      group: "Land Designations",
      riskLevel: {
        current: 0,
        automated: "Low Risk",
        customized: "",
      },
      message: {
        automated:
          'The nearest Heritage Coast to your selected location is <span class="text-havelock-blue-500">Purbeck</span>, located more than <span class="text-havelock-blue-500">215 km</span> away',
      },
      importance: {
        number: 3,
        value: "Medium",
      },
      _id: {
        $oid: "645347ca4bfedf1c37b9f52e",
      },
    },
    {
      image:
        "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/ward.png",
      name: "Ward",
      group: "Boundaries",
      provider: {
        name: "Office for National Statistics",
        url: "https://www.ons.gov.uk/",
        attribution: "Office for National Statistics",
      },
      riskLevel: {
        current: 0,
        automated: "Not Applicable",
        customized: "",
      },
      message: {
        automated:
          'The selected location is within the <span class="text-havelock-blue-500">Cannock West</span> Ward',
      },
      importance: {
        number: 1,
        value: "Very Low",
      },
      _id: {
        $oid: "645347ca4bfedf1c37b9f52f",
      },
    },
    {
      image:
        "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/ancient_woodland.png",
      name: "Ancient Woodland",
      group: "Land Designations",
      riskLevel: {
        current: 0,
        automated: "Low Risk",
        customized: "",
      },
      message: {
        automated:
          'The nearest Ancient Woodland to your selected location is <span class="text-havelock-blue-500">Mansty Wood</span>, located more than <span class="text-havelock-blue-500">2.7 km</span> away',
      },
      importance: {
        number: 3,
        value: "Medium",
      },
      _id: {
        $oid: "645347ca4bfedf1c37b9f530",
      },
    },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/parish.png",
    //   name: "Parish",
    //   group: "Boundaries",
    //   provider: {
    //     name: "Office for National Statistics",
    //     url: "https://www.ons.gov.uk/",
    //     attribution: "Office for National Statistics",
    //   },
    //   riskLevel: {
    //     current: 0,
    //     automated: "Not Applicable",
    //     customized: "",
    //   },
    //   message: {
    //     automated: "The selected location is not within any Parish",
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f531",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/aonb.png",
    //   name: "Areas of Outstanding Natural Beauty",
    //   group: "Land Designations",
    //   provider: {
    //     name: "Natural England",
    //     url: "https://www.gov.uk/government/organisations/natural-england",
    //     attribution: "Natural England",
    //   },
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Area of Outstanding Natural Beauty to your selected location is <span class="text-havelock-blue-500">Cannock Chase</span>, located more than <span class="text-havelock-blue-500">950 m</span> away',
    //   },
    //   importance: {
    //     number: 4,
    //     value: "High",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f532",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/county.png",
    //   name: "County",
    //   group: "Boundaries",
    //   provider: {
    //     name: "Office for National Statistics",
    //     url: "https://www.ons.gov.uk/",
    //     attribution: "Office for National Statistics",
    //   },
    //   riskLevel: {
    //     current: 0,
    //     automated: "Not Applicable",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The selected location is within the <span class="text-havelock-blue-500">Staffordshire</span> County',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f533",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/region.png",
    //   name: "Region",
    //   group: "Boundaries",
    //   provider: {
    //     name: "Office for National Statistics",
    //     url: "https://www.ons.gov.uk/",
    //     attribution: "Office for National Statistics",
    //   },
    //   riskLevel: {
    //     current: 0,
    //     automated: "Not Applicable",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The selected location is within the <span class="text-havelock-blue-500">West Midlands</span> Region',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f534",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/national_parks.png",
    //   name: "National Parks",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest National Park to your selected location is <span class="text-havelock-blue-500">Peak District</span>, located more than <span class="text-havelock-blue-500">40.5 km</span> away',
    //   },
    //   importance: {
    //     number: 3,
    //     value: "Medium",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f535",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/local_nature_reserves.png",
    //   name: "Local Nature Reserves",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Local Nature Reserve to your selected location is <span class="text-havelock-blue-500">Shoal Hill Common</span>, located more than <span class="text-havelock-blue-500">950 m</span> away',
    //   },
    //   importance: {
    //     number: 3,
    //     value: "Medium",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f536",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/national_nature_reserves.png",
    //   name: "National Nature Reserves",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest National Nature Reserve to your selected location is <span class="text-havelock-blue-500">Wren\'S Nest</span>, located more than <span class="text-havelock-blue-500">17.75 km</span> away',
    //   },
    //   importance: {
    //     number: 4,
    //     value: "High",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f537",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/common_land.png",
    //   name: "Common Land",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Common Land to your selected location is <span class="text-havelock-blue-500">Shoal Hill Common</span>, located more than <span class="text-havelock-blue-500">950 m</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f538",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/ramsar.png",
    //   name: "Ramsar",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Ramsar to your selected location is <span class="text-havelock-blue-500">Midland Meres & Mosses - Phase 1</span>, located more than <span class="text-havelock-blue-500">18 km</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f539",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/special_areas_of_conservation.png",
    //   name: "Special Areas of Conservation",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Special Area of Conversation to your selected location is <span class="text-havelock-blue-500">Cannock Chase</span>, located more than <span class="text-havelock-blue-500">4.2 km</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f53a",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/sssi.png",
    //   name: "Sites of Special Scientific Interest",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Site of Special Scientific Interest (SSSI) to your selected location is <span class="text-havelock-blue-500">Stowe Pool And Walk Mill Clay Pit</span>, located more than <span class="text-havelock-blue-500">1.75 km</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f53b",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/special_protection_areas.png",
    //   name: "Special Protection Areas",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Special Protection Area to your selected location is <span class="text-havelock-blue-500">Peak District Moors (South Pennine Moors Phase 1)</span>, located more than <span class="text-havelock-blue-500">49 km</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f53c",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/world_heritage_sites.png",
    //   name: "World Heritage Sites",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest World Heritage Site to your selected location is <span class="text-havelock-blue-500">Ironbridge Gorge</span>, located more than <span class="text-havelock-blue-500">28 km</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f53d",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/historic_battlefields.png",
    //   name: "Historic Battlefields",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Historic Battlefield to your selected location is <span class="text-havelock-blue-500">Battle Of Hopton Heath 1643</span>, located more than <span class="text-havelock-blue-500">15.75 km</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f53e",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/green_belt.png",
    //   name: "Green Belt",
    //   group: "Land Designations",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Low Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Green Belt to your selected location is <span class="text-havelock-blue-500">Birmingham</span>, located more than <span class="text-havelock-blue-500">950 m</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f53f",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/conservation_areas.png",
    //   name: "Conservation Areas",
    //   group: "Conservation Areas",
    //   riskLevel: {
    //     current: 0,
    //     automated: "High Risk",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The selected location is within the <span class="text-havelock-blue-500">No Data Available For Publication By He</span> Conservation Area',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f540",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/listed_buildings.png",
    //   name: "Listed Buildings",
    //   group: "Other",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Moderate Low",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Listed Building to your selected location is <span class="text-havelock-blue-500">79, High Green</span>, located more than <span class="text-havelock-blue-500">275 m</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f541",
    //   },
    // },
    // {
    //   image:
    //     "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/scheduled_monuments.png",
    //   name: "Scheduled Monuments",
    //   group: "Other",
    //   riskLevel: {
    //     current: 0,
    //     automated: "Moderate Low",
    //     customized: "",
    //   },
    //   message: {
    //     automated:
    //       'The nearest Scheduled Monument to your selected location is <span class="text-havelock-blue-500">Churchyard Cross, St Luke\'S Churchyard</span>, located more than <span class="text-havelock-blue-500">475 m</span> away',
    //   },
    //   importance: {
    //     number: 1,
    //     value: "Very Low",
    //   },
    //   _id: {
    //     $oid: "645347ca4bfedf1c37b9f542",
    //   },
    // },
    {
      image:
        "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/built_up_areas.png",
      name: "Built Up Areas",
      group: "Other",
      riskLevel: {
        current: 0,
        automated: "High Risk",
        customized: "",
      },
      message: {
        automated:
          'The selected location is within the <span class="text-havelock-blue-500">Cannock</span> Built Up Area',
      },
      importance: {
        number: 1,
        value: "Very Low",
      },
      _id: {
        $oid: "645347ca4bfedf1c37b9f543",
      },
    },
  ],
  createdAt: {
    $date: "2023-05-04T05:51:06.167Z",
  },
  updatedAt: {
    $date: "2023-05-04T06:01:59.151Z",
  },
  __v: 0,
  image:
    "https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/645347ca4bfedf1c37b9f52b/cover-image.png",
};
