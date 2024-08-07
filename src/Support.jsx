import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Friend",
    id: "tier-supporter",
    href: "https://www.paypal.com/donate/?hosted_button_id=57759LERALE5E",
    priceMonthly: "$10",
    description: "",
    features: [],
    featured: false,
  },
  {
    name: "Supporter",
    id: "tier-supporter",
    href: "https://www.paypal.com/donate/?hosted_button_id=LYVJH85RLC62G",
    priceMonthly: "$25",
    description: "",
    features: [],
    featured: false,
  },
  {
    name: "Champion",
    id: "tier-supporter",
    href: "https://www.paypal.com/donate/?hosted_button_id=F49MBNPSXYGGY",
    priceMonthly: "$50",
    description: "",
    features: [],
    featured: false,
  },
  {
    name: "Ally",
    id: "tier-supporter",
    href: "https://www.paypal.com/donate/?hosted_button_id=R8MPYX459TYSE",
    priceMonthly: "$100",
    description: "",
    features: [],
    featured: false,
  },
  {
    name: "Benefactor",
    id: "tier-hero",
    href: "https://www.paypal.com/donate/?hosted_button_id=6E8FPF539SHVE",
    priceMonthly: "$1000",
    description: "",
    features: [],
    featured: true,
  },
  {
    name: "Mystery",
    id: "tier-hero",
    href: "https://www.paypal.com/donate/?hosted_button_id=MLQGQBRKADS5Y",
    priceMonthly: "Custom",
    description: "",
    features: [],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function shop() {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "spencerstore-8668.myshopify.com",
      storefrontAccessToken: "552b0ed8efd8722906d83e0e0dbc74b9",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("collection", {
        id: "438800220467",
        node: document.getElementById("collection-component-1678146351123"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                  width: "calc(25% - 20px)",
                },
                img: {
                  height: "calc(100% - 15px)",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  "border-radius": "10px",
                  "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                },
                imgWrapper: {
                  "padding-top": "calc(75% + 15px)",
                  position: "relative",
                  height: "0",
                },
              },

              button: {
                "font-family": "Source Sans Pro, sans-serif",
                "font-weight": "bold",
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                ":hover": {
                  "background-color": "#3f4dbe",
                },
                "background-color": "#252d70",
                ":focus": {
                  "background-color": "#3f4dbe",
                },
                "border-radius": "15px",
                "padding-left": "60px",
                "padding-right": "60px",
              },
              quantityInput: {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
              },
            },
            text: {
              button: "Add to cart",
            },
            googleFonts: ["Source Sans Pro"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Source Sans Pro, sans-serif",
                "font-weight": "bold",
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                ":hover": {
                  "background-color": "#3f4dbe",
                },
                "background-color": "#252d70",
                ":focus": {
                  "background-color": "#3f4dbe",
                },
                "border-radius": "15px",
                "padding-left": "60px",
                "padding-right": "60px",
              },
              quantityInput: {
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
              },
            },
            googleFonts: ["Source Sans Pro"],
            text: {
              button: "Add to cart",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Source Sans Pro, sans-serif",
                "font-weight": "bold",
                "font-size": "16px",
                "padding-top": "16px",
                "padding-bottom": "16px",
                ":hover": {
                  "background-color": "#3f4dbe",
                },
                "background-color": "#252d70",
                ":focus": {
                  "background-color": "#3f4dbe",
                },
                "border-radius": "15px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            googleFonts: ["Source Sans Pro"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Source Sans Pro, sans-serif",
                "font-weight": "bold",
                "background-color": "#252d70",
                ":hover": {
                  "background-color": "#3f4dbe",
                },
                ":focus": {
                  "background-color": "#3f4dbe",
                },
              },
              count: {
                "font-size": "16px",
              },
            },
            googleFonts: ["Source Sans Pro"],
          },
        },
      });
    });
  }
}

// document.addEventListener("load", shop());

export default function Example() {
  shop();
  return (
    <div>
      <div className="relative isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <svg className="mx-auto w-[72.1875rem]" viewBox="0 0 1155 678">
            <path
              fill="url(#083c110e-60c8-42bb-a9db-29bba74cc569)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="083c110e-60c8-42bb-a9db-29bba74cc569"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Donations
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose which option is best for you!
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Donations are a unique opportunity for individuals and businesses to
          support the care and well-being of our horses. By Donating, you help
          us provide the necessary resources for their nutrition, medical care,
          and overall upkeep.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60 sm:mx-8 lg:mx-0",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-600",
                  "text-base font-semibold leading-7"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-bold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-gray-400" : "text-gray-500",
                    "text-base"
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base leading-7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                target="_blank"
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                  "mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Donate Now!
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 pt-5 pb-5 sm:p-32">
        <div id="collection-component-1678146351123"></div>
      </div>
    </div>
  );
}
