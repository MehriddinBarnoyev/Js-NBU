const currencies = [
  {
    country: "United States",
    flag: "photos/USD.png",
    currencyName: "USD",
    currencySymbol: "$",
    buyRate: 12760.0,
    sellRate: 12810.0,
  },
  {
    country: "European Union",
    flag: "photos/EUR.png",
    currencyName: "EUR",
    currencySymbol: "€",
    buyRate: 13600.0,
    sellRate: 13800.0,
  },
  {
    country: "Russia",
    flag: "photos/RUB.png",
    currencyName: "RUB",
    currencySymbol: "₽",
    buyRate: 120.0,
    sellRate: 140.0,
  },
  {
    country: "United Kingdom",
    flag: "photos/GBP.png",
    currencyName: "GBP",
    currencySymbol: "£",
    buyRate: 16300.0,
    sellRate: 17000.0,
  },
  {
    country: "Switzerland",
    flag: "photos/CHF.png",
    currencyName: "CHF",
    currencySymbol: "Fr.",
    buyRate: 14400.0,
    sellRate: 15150.0,
  },
  {
    country: "Japan",
    flag: "photos/JPY.png",
    currencyName: "JPY",
    currencySymbol: "¥",
    buyRate: 70.0,
    sellRate: 90.0,
  },
  {
    country: "Kazakhstan",
    flag: "photos/KZT.png",
    currencyName: "KZT",
    currencySymbol: "₸",
    buyRate: 15.0,
    sellRate: 26.0,
  },
  {
    country: "Australia",
    flag: "photos/AUD.png",
    currencyName: "AUD",
    currencySymbol: "$",
    buyRate: 8900.0, // Example of AUD to UZS conversion rate
    sellRate: 9000.0, // Example of AUD to UZS conversion rate
  },
  {
    country: "Canada",
    flag: "photos/CAD.png",
    currencyName: "CAD",
    currencySymbol: "$",
    buyRate: 9500.0, // Example of CAD to UZS conversion rate
    sellRate: 9600.0, // Example of CAD to UZS conversion rate
  },
  {
    country: "China",
    flag: "photos/CNY.png",
    currencyName: "CNY",
    currencySymbol: "¥",
    buyRate: 1800.0, // Example of CNY to UZS conversion rate
    sellRate: 1900.0, // Example of CNY to UZS conversion rate
  },
  {
    country: "Denmark",
    flag: "photos/DKK.png",
    currencyName: "DKK",
    currencySymbol: "kr.",
    buyRate: 1800.0, // Example of DKK to UZS conversion rate
    sellRate: 1900.0, // Example of DKK to UZS conversion rate
  },
  {
    country: "Egypt",
    flag: "photos/EGP.png",
    currencyName: "EGP",
    currencySymbol: "£",
    buyRate: 400.0, // Example of EGP to UZS conversion rate
    sellRate: 420.0, // Example of EGP to UZS conversion rate
  },
  {
    country: "Iceland",
    flag: "photos/ISK.png",
    currencyName: "ISK",
    currencySymbol: "kr.",
    buyRate: 80.0, // Example of ISK to UZS conversion rate
    sellRate: 90.0, // Example of ISK to UZS conversion rate
  },
  {
    country: "South Korea",
    flag: "photos/KRW.png",
    currencyName: "KRW",
    currencySymbol: "₩",
    buyRate: 10.0, // Example of KRW to UZS conversion rate
    sellRate: 12.0, // Example of KRW to UZS conversion rate
  },
  {
    country: "Kuwait",
    flag: "photos/KWD.png",
    currencyName: "KWD",
    currencySymbol: "د.ك",
    buyRate: 39000.0, // Example of KWD to UZS conversion rate
    sellRate: 40000.0, // Example of KWD to UZS conversion rate
  },
  {
    country: "Lebanon",
    flag: "photos/LBP.png",
    currencyName: "LBP",
    currencySymbol: "ل.ل",
    buyRate: 0.065, // Example of LBP to UZS conversion rate (small)
    sellRate: 0.07, // Example of LBP to UZS conversion rate (small)
  },
  {
    country: "Malaysia",
    flag: "photos/MYR.png",
    currencyName: "MYR",
    currencySymbol: "RM",
    buyRate: 3000.0, // Example of MYR to UZS conversion rate
    sellRate: 3200.0, // Example of MYR to UZS conversion rate
  },
  {
    country: "Norway",
    flag: "photos/NOK.png",
    currencyName: "NOK",
    currencySymbol: "kr",
    buyRate: 1400.0, // Example of NOK to UZS conversion rate
    sellRate: 1500.0, // Example of NOK to UZS conversion rate
  },
  {
    country: "Poland",
    flag: "photos/PLN.png",

    currencyName: "PLN",
    currencySymbol: "zł",
    buyRate: 3500.0, // Example of PLN to UZS conversion rate
    sellRate: 3600.0, // Example of PLN to UZS conversion rate
  },
  {
    country: "Sweden",
    flag: "photos/SEK.png",
    currencyName: "SEK",
    currencySymbol: "kr",
    buyRate: 1300.0, // Example of SEK to UZS conversion rate
    sellRate: 1400.0, // Example of SEK to UZS conversion rate
  },
  {
    country: "Singapore",
    flag: "photos/SGD.png",
    currencyName: "SGD",
    currencySymbol: "$",
    buyRate: 9300.0, // Example of SGD to UZS conversion rate
    sellRate: 9400.0, // Example of SGD to UZS conversion rate
  },
  {
    country: "Turkey",
    flag: "photos/TRY.png",
    currencyName: "TRY",
    currencySymbol: "₺",
    buyRate: 670.0, // Example of TRY to UZS conversion rate
    sellRate: 680.0, // Example of TRY to UZS conversion rate
  },
  {
    country: "Ukraine",
    flag: "photos/UAH.png",
    currencyName: "UAH",
    currencySymbol: "₴",
    buyRate: 340.0, // Example of UAH to UZS conversion rate
    sellRate: 350.0, // Example of UAH to UZS conversion rate
  },
];
const currencyContainer = document.getElementById("tablle");
const currencyDropdown = document.getElementById("currency");

// Display currency table
const displayCurrencies = () => {
  if (!currencyContainer) {
    console.error("currencyContainer elementi topilmadi.");
    return;
  }

  currencyContainer.innerHTML = `
      <tr class="currencyBuySell">
        <th>VALYUTANING NOMI</th>
        <th>SOTIB OLISH</th>
        <th>SOTISH</th>
      </tr>
    `;

  // Loop through the first 7 currencies and create rows for each one
  currencies.slice(0, 7).forEach((currency) => {
    currencyContainer.innerHTML += `
      <tr>
        <td><img src="${currency.flag}" alt="" /> ${currency.country} ${currency.currencyName}</td>
        <td>${currency.buyRate ? currency.buyRate.toFixed(2) : "N/A"}</td>
        <td>${currency.sellRate ? currency.sellRate.toFixed(2) : "N/A"}</td>
      </tr>
    `;
  });
};

// Populate currency dropdown with options
const populateCurrencyDropdown = () => {
  if (!currencyDropdown) return;

  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency.currencyName;
    option.textContent = `${currency.currencyName}`;
    currencyDropdown.appendChild(option);
  });
};

// Calculate currency based on selected amount and currency
const calculateCurrency = () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const selectedCurrencyName = currencyDropdown.value;
  const selectedCurrency = currencies.find((currency) => currency.currencyName === selectedCurrencyName);

  if (selectedCurrency) {
    const resultInUZS = amount * selectedCurrency.buyRate;
    document.getElementById("result").innerText = `${resultInUZS.toFixed(2)} UZS`;
  }
};

// Initialize and add event listeners if elements exist
if (currencyDropdown && document.getElementById("amount")) {
  currencyDropdown.addEventListener("change", calculateCurrency);
  document.getElementById("amount").addEventListener("input", calculateCurrency);
}

// Execute functions on load
displayCurrencies();
populateCurrencyDropdown();
calculateCurrency();
