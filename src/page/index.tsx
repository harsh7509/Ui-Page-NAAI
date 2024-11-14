"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, Phone, Share, Bookmark, Camera, ChevronRight , Search } from "lucide-react";

export default function HomePage() {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    return (
        <div className={cn(" sm:bg-red-500 p-4 sm:p-8 md:p-20   w-full")}> {/* Responsive padding */}
            <Card className="w-full max-w-2xl mx-auto"> {/* Centered Card with max-width for larger screens */}
                <CardHeader className="">
                    <div className="flex items-center space-x-6 p-6  w-full">
                        {/* Avatar Section */}
                        <div className="flex items-center justify-center">
                            <div className="h-24 w-24 sm:h-36 sm:w-36 flex justify-center">
                                <Avatar className="h-full w-full">
                                    <AvatarImage
                                        src="/pikachu.jpg"
                                        className="rounded-full h-full w-full"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <div className="text-left">
                            <h1 className="text-lg sm:text-2xl font-bold">Lalit</h1>
                            <p className="text-gray-600">Works at</p>
                            <h1 className="text-gray-600 text-lg sm:text-2xl">Tangles Salon</h1>
                        </div>
                    </div>
                </CardHeader>

                <div className="p-4 sm:p-6">
                    {/* Rating Section */}
                    <div>
                        <h1 className="text-lg font-semibold">Rating</h1>
                    </div>
                    <div className="flex items-center mt-2 space-x-1 sm:space-x-2">
                        {[...Array(4)].map((_, index) => (
                            <Star key={index} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                        ))}
                        <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
                        <Button variant="outline" className="ml-4  sm:flex">
                            View Salon
                            <ChevronRight className="text-red-500 h-5 w-5 ml-1" />
                        </Button>
                    </div>
                </div>

                <CardContent>
                    {/* Icon Section */}
                    <section className="w-full py-4 px-0 bg-white-100">
                        <div className="flex justify-evenly space-x-2 sm:space-x-8 py-2">
                            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                            <Share className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                            <Bookmark className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                            <Camera className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                        </div>
                    </section>

                    <div className="flex mb-4 justify-between ">
                        <Button className="text-base sm:text-xl  text-red-500 bg-white">Services</Button>
                        <Button className="text-base sm:text-xl  text-gray-500 bg-white ">Reviews</Button>
                    </div>

                    <div className="space-y-4 p-4  bg-gray-100  w-auto">
                        {/* Gender Selection */}
                        <div className="flex space-x-2 justify-between sm:justify-start w-fit">
                            <Button className="sm:w-10 " variant={selectedGender === 'Men' ? 'default' : 'outline'} onClick={() => setSelectedGender('Men')}>Men</Button>
                            <Button variant={selectedGender === 'Women' ? 'default' : 'outline'} onClick={() => setSelectedGender('Women')}>Women</Button>
                            <div className="flex justify-center items-center border rounded-lg border-1 bg-white border-zinc-200 "><Search  className="w-4 ml-4 bg-white"/><Input className="border-none w-24" placeholder="Search"/></div>
                        </div>

                        <p className="font-bold mt-4">SELECT CATEGORY:</p>
                        <div className="flex space-x-2 justify-center sm:justify-start w-fit">
                            <Button className=" " variant="outline">Hair</Button>
                            <Button variant="outline">Hair Colour</Button>
                            <Button className="flex " variant="outline"><span className="lg:bg-red-200">Hair</span><span>Treatment</span></Button>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className=" items-center space-x-2 mt-4 ">
                        <p className="text-gray-600">Hair Cut with Wash</p>
                        <div className="flex space-x-2 items-center">
                            <p className="text-gray-500">Rs. 225.0</p>
                            <p className="text-gray-500 line-through">Rs. 300.0</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
