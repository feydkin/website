import { Pipe, PipeTransform } from '@angular/core';

enum LuckStrings {
  lucky = 'Lucky',
  average = 'Average',
  unlucky = 'Unlucky',
  extremely = 'Extremely',
  very = 'Very',
}

@Pipe({ name: 'luck' })
export class LuckPipe implements PipeTransform {
  transform(value: number): string {
    return this.luckToString(value);
  }

  luckToString(value: number): string {
    let luckiness: string = LuckStrings.lucky;

    if (value > 0.9 && value < 1.1) {
      return LuckStrings.average;
    }
    if (value > 1.1) {
      luckiness = LuckStrings.unlucky;
    }

    const absValue = Math.abs(value);
    let degree = '';
    if (absValue > 1) {
      degree = LuckStrings.extremely;
    } else if (absValue > 0.6) {
      degree = LuckStrings.very;
    }

    return (degree.length > 0 ? `${degree} ${luckiness}` : luckiness);
  }
}
