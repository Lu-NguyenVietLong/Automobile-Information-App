import {carProps} from '@/types'

export function calculateCarRent(year: number, city_mpg: number) {
    const baseRentalCost = 50;
    const costPerYear = 10;
    const costPerMpg = 1;
  
    const rentalCost = baseRentalCost + costPerYear * (2024 - year) + costPerMpg * city_mpg;
  
    return rentalCost;
  }

  export const generateCarImageUrl = (car: carProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, year, model } = car

    url.searchParams.append('customer', 'hrjavascript-mastery')

    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`

  }