/*
* why did we choose the below info for Geotag interface?
* 1. looked at twitter API
* 2. submitted some tweets with geotags
* 3. saw what the data twitter sent back to me was
* 4. took the fields that i wanted
*/
export interface Geotag {
    id: string,
    name: string,
    place_type: string,
    full_name: string,
    country: string,
    country_code: string,
    coordinates: {
        lat: number,
        long: number,
    }
}

export interface Tweet {
    id: string,
    /*
    * again may be unnecessary since we're storing these as
    * twitterId's in Vendor interface
    */
    userId: string,
    userName: string,
    text: string,
    date: string,
    geo: Geotag,
}

export interface Vendor {
    name: string,
    image: string,
    description: string,
    /* 
    * twitterId --> will be our id's for vendor since it's unique
    * maybe need another ID if we're using data from other sources
    * (not just twitter) to capture vendors
    */
    twitterId: string,
    tweets: Tweet[],
    created: number,
    updated: number,
}