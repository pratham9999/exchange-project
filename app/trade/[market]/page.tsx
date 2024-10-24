/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useParams } from "next/navigation";
import { MarketBar } from "@/app/components/MarketBar";
import { TradeView } from "@/app/components/TradeView";
import { Depth } from "@/app/components/depth/Depth";

export default function page() {
    const {market} = useParams();
    return <div>
                
        <div>
               <MarketBar market={market as string} />
               <div>
                   <div>
                         <TradeView market={market as string} />
                   </div>
                   <div>

                     <Depth market={market as string}/>

                   </div>
               </div>

        </div>
        <div>

             {/* swap ui */}

        </div>
        
    </div>
}