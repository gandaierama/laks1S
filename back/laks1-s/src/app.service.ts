import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

import * as PERIODIC_RESPONSE from './datasets/periodic.json'; // or use const inside the controller function


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStatus(): any {
  	let res=JSON.stringify(PERIODIC_RESPONSE);
  	let res1=JSON.parse(res)[0].elements;
  	let arr=[];
  	 for(let item of res1){ 
  	 	let data=JSON.stringify(item);
  	 	let data2=JSON.parse(data);
  	 	console.log(data2);

  	 	let info={
  	 		name:data2.name,
  	 		atomic_mass:data2.atomic_mass,
  	 		density:data2.density,
  	 		number:data2.number,
  	 		symbol:data2.symbol,
  	 		electron_affinity:data2.electron_affinity,
  	 		electron_configuration:data2.electron_configuration,
  	 		discovered_by:data2.discovered_by,
  	 			
  	 	};

  	 	arr.push(info);
  	 }
    return JSON.stringify(arr);
  }

}
