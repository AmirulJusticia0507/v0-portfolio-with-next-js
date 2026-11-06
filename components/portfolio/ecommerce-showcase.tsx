"use client";

import { useState } from "react";
import {
  Check,
  Footprints,
  GitCompare,
  Heart,
  Share2,
  ShoppingCart,
  Star,
  ThumbsUp,
} from "lucide-react";

const availableColors = ["Green", "Blue", "Purple", "Red", "Orange"];

const colorValues: Record<string, string> = {
  Green: "#22c55e",
  Blue: "#3b82f6",
  Purple: "#a855f7",
  Red: "#ef4444",
  Orange: "#f97316",
};

const availableSizes = ["S", "Small M", "Medium L", "Large XL", "Xtra-Large"];

const productImages = [
  { id: "1", bg: "#d9e9a8" },
  { id: "2", bg: "#ffd9ca" },
  { id: "3", bg: "#e5dfd4" },
  { id: "4", bg: "#c7d8f0" },
  { id: "5", bg: "#d9e9a8" },
];

const productReviews = [
  {
    name: "Brad Diesel",
    time: "4 Hours Ago",
    message: "Call me whenever you can...",
  },
  {
    name: "John Pierce",
    time: "4 Hours Ago",
    message: "I got your message bro",
  },
  {
    name: "Nora Silvester",
    time: "4 Hours Ago",
    message: "The subject goes here",
  },
];

type ProductTab = "description" | "comments" | "rating";

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${index < Math.round(value) ? "text-primary fill-primary" : "text-muted-foreground"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function EcommerceShowcase() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [wished, setWished] = useState(false);
  const [activeTab, setActiveTab] = useState<ProductTab>("description");
  const [cartState, setCartState] = useState<"idle" | "added">("idle");

  const handleAddToCart = () => {
    setCartState("added");
    setTimeout(() => setCartState("idle"), 2500);
  };

  const handleToggleWishlist = () => {
    setWished((prev) => !prev);
  };

  const tabs: { id: ProductTab; label: string }[] = [
    { id: "description", label: "Description" },
    { id: "comments", label: "Comments" },
    { id: "rating", label: "Rating" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-16">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <li>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              E-commerce
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">LOWA Renegade GTX Mid Hiking Boots</li>
        </ol>
      </nav>

      {/* Product */}
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        {/* Product images */}
        <div>
          <div className="aspect-square w-full border border-border bg-secondary/40 rounded-xl flex items-center justify-center">
            <Footprints className="size-40 text-foreground/20" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-3">
            {productImages.map((image) => (
              <button
                key={image.id}
                type="button"
                aria-label={`Product image ${image.id}`}
                className="aspect-square w-full border border-border rounded-lg transition-all hover:border-primary/50"
                style={{ backgroundColor: image.bg }}
              >
                <Footprints className="size-6 mx-auto mt-2 text-foreground/40" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <h3 className="text-foreground font-black uppercase text-2xl lg:text-3xl leading-tight tracking-tight">
            LOWA Men’s Renegade GTX Mid Hiking Boots
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <StarRating value={4.8} />
            <span className="text-sm text-muted-foreground">128 Reviews</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <ThumbsUp className="w-3.5 h-3.5" aria-hidden="true" />
              Write a review
            </span>
          </div>

          <div className="mt-3 text-4xl font-black text-foreground">$80.00</div>
          <div className="text-sm text-muted-foreground">Ex Tax: $80.00</div>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae condimentum erat.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed
            posuere, purus at efficitur hendrerit, augue elit lacinia arcu, a eleifend sem elit et nunc.
          </p>

          {/* Available colors */}
          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
              Available Colors
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {availableColors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full text-xs font-mono transition-all ${
                    selectedColor === color
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-foreground/30 text-muted-foreground hover:border-foreground"
                  }`}
                >
                  <span
                    className="size-3 rounded-full border border-foreground/40"
                    style={{ backgroundColor: colorValues[color] }}
                    aria-hidden="true"
                  />
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Available sizes */}
          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
              Size Please select one
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 border rounded-md text-xs font-mono transition-all ${
                    selectedSize === size
                      ? "bg-foreground text-background border-foreground"
                      : "border-foreground/30 text-muted-foreground hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all"
            >
              {cartState === "added" ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                  Add to Cart
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleToggleWishlist}
              aria-pressed={wished}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground text-foreground font-semibold rounded-full hover:bg-secondary transition-all"
            >
              <Heart className={`w-4 h-4 ${wished ? "fill-primary text-primary" : ""}`} aria-hidden="true" />
              Add to Wishlist
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/40 text-muted-foreground hover:text-foreground hover:border-foreground transition-all rounded-full text-xs font-mono uppercase tracking-wider"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
              Share
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/40 text-muted-foreground hover:text-foreground hover:border-foreground transition-all rounded-full text-xs font-mono uppercase tracking-wider"
            >
              <GitCompare className="w-4 h-4" aria-hidden="true" />
              Compare
            </button>
            <button
              type="button"
              onClick={handleToggleWishlist}
              className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/40 text-muted-foreground hover:text-foreground hover:border-foreground transition-all rounded-full text-xs font-mono uppercase tracking-wider"
            >
              <Heart className={`w-4 h-4 ${wished ? "fill-primary text-primary" : ""}`} aria-hidden="true" />
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 border-t border-border pt-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all ${
                activeTab === tab.id
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/30 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "description" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae condimentum erat.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed
                posuere, purus at efficitur hendrerit, augue elit lacinia arcu, a eleifend sem elit et nunc.
                Sed rutrum vestibulum est, sit amet cursus dolor fermentum vel. Suspendisse mi nibh, congue
                et ante et, commodo mattis lacus. Duis varius finibus purus sed venenatis.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vivamus varius metus quam, id dapibus velit mattis eu. Praesent et semper risus. Vestibulum
                erat erat, condimentum at elit at, bibendum placerat orci. Nullam gravida velit mauris, in
                pellentesque urna pellentesque viverra.
              </p>
            </div>
          )}

          {activeTab === "comments" && (
            <div className="space-y-6">
              {productReviews.map((review) => (
                <div key={review.name} className="flex gap-4">
                  <div className="size-10 shrink-0 rounded-full bg-secondary text-foreground flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">{review.name}</span>
                      <span className="text-xs text-muted-foreground">{review.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{review.message}</p>
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground text-foreground font-semibold rounded-full text-xs font-mono uppercase tracking-wider hover:bg-secondary transition-all"
              >
                See All Messages
              </button>
            </div>
          )}

          {activeTab === "rating" && (
            <div className="max-w-md space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-foreground">4.8</span>
                <div>
                  <StarRating value={4.8} />
                  <p className="mt-1 text-sm text-muted-foreground">Based on 128 reviews</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { stars: 5, percent: 78 },
                  { stars: 4, percent: 14 },
                  { stars: 3, percent: 5 },
                  { stars: 2, percent: 2 },
                  { stars: 1, percent: 1 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <span className="w-6 text-xs font-mono text-muted-foreground">{row.stars} ★</span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${row.percent}%` }}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="w-10 text-right text-xs font-mono text-muted-foreground">{row.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
