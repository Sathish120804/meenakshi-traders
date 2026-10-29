import React from 'react';
import { CheckCircle2, ShieldCheck, Award, TrendingUp, Users, Factory } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Business Story & Commitment */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-bold uppercase tracking-wider">
              <span>About Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-forest leading-tight">
              About Meenakshi Traders
            </h2>

            <p className="text-brand-dark/85 text-base sm:text-lg leading-relaxed">
              Meenakshi Traders is an established agricultural products, cattle feed, grain, and livestock feed trading business based in Tamil Nadu, India. Built on decades of trusted trading relationships, we take pride in supporting local farmers, dairy cattle owners, and retail partners with authentic feeds and essential agricultural grains.
            </p>

            <p className="text-brand-dark/75 text-sm sm:text-base leading-relaxed">
              From high-yielding dairy cattle nutrition to traditional rice varieties, grains, and millets, our focus has always been steadfast: genuine products, honest trade dealings, and dependable stock availability. Whether you need a single 50kg bag for your family farm or bulk truckloads for wholesale distribution, our dedicated team is here to assist you.
            </p>

            {/* Trading Values */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-forest font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-leaf flex-shrink-0" />
                <span>Decades of Agricultural Trading Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-leaf flex-shrink-0" />
                <span>Dedicated Support for Dairy Farmers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-leaf flex-shrink-0" />
                <span>Direct Sourcing & Bulk Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-leaf flex-shrink-0" />
                <span>Honest, Transparent Market Rates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Highlights Box */}
          <div className="lg:col-span-5">
            <div className="bg-brand-cream/80 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-extrabold text-xl text-brand-forest">
                  Key Highlights
                </h3>
                <p className="text-xs text-brand-dark/60 mt-1">
                  Why dairy farmers and trade partners choose Meenakshi Traders
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Highlight 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-forest/10 text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-forest">
                      Authentic Branded Products
                    </h4>
                    <p className="text-xs text-brand-dark/70 leading-relaxed mt-0.5">
                      Genuine feeds from top manufacturers including KNC Krishi, SKM, KS/KSE, and Santhi.
                    </p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-forest/10 text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-forest">
                      Direct Manufacturer Supply
                    </h4>
                    <p className="text-xs text-brand-dark/70 leading-relaxed mt-0.5">
                      Consistent supply channels ensuring product freshness and optimal nutritional value.
                    </p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-forest/10 text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-forest">
                      Competitive Wholesale Pricing
                    </h4>
                    <p className="text-xs text-brand-dark/70 leading-relaxed mt-0.5">
                      Fair pricing structures for both retail farm quantities and bulk commercial shipments.
                    </p>
                  </div>
                </div>

                {/* Highlight 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-forest/10 text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-forest">
                      Trusted by Local Farmers & Dairy Owners
                    </h4>
                    <p className="text-xs text-brand-dark/70 leading-relaxed mt-0.5">
                      Long-standing customer trust across regional dairy communities and agricultural dealers.
                    </p>
                  </div>
                </div>

              </div>

              <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3 text-xs text-brand-dark/70">
                <ShieldCheck className="w-4 h-4 text-brand-forest flex-shrink-0" />
                <span>
                  All product inquiries are handled directly by Arunachalam A and Sathish A.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
