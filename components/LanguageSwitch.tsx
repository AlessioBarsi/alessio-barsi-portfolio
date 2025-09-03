'use client';
import { ReactCountryFlag } from "react-country-flag";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type Props = {
    lang: string;
}

export default function LanguageSwitch({lang}: Props) {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className='mx-3 mt-1 text-2xl'>
                    <ChevronDown />
                    <ReactCountryFlag countryCode={lang == 'en' ? 'GB' : 'IT'} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Link href={lang == 'en' ? '/it' : '/en'}>
                    <Button variant="outline" className='text-2xl'>
                        <ReactCountryFlag countryCode={lang == 'en' ? 'IT' : 'GB'} />
                    </Button>
                </Link>
            </PopoverContent>
        </Popover>
    )
}
