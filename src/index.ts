interface BaseSearcher {
  search(num: number);
} 
//ts-node index.ts

class LinearSearch implements BaseSearcher {
  constructor(public list: number[]) {}

  public search(num: number) {
    let posicion = this.list.includes(num)
    console.log(this.list)
    if(posicion) {
      console.log(posicion)
      return posicion
    }
  }
}

class BinarySearch implements BaseSearcher {
  constructor(public list: number[]) {}

  public search(num: number) { 
    this.list.sort((n1, n2): number => n1 - n2)
    console.log(this.list)
    let first = 0;    //left endpoint
    let last = this.list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (this.list[middle] == num) {
          found = true;
          position = middle;
      } else if (this.list[middle] > num) {  //if in lower half
          last = middle - 1;
      } else {  //in in upper half
          first = middle + 1;
      }
    }
    console.log(position)
    return position;
  }
}

class Searcher {
  private search: BaseSearcher;

  constructor(search: BaseSearcher) {
    this.search = search
  }
  
  pass(num: number) {
    this.search.search(num)
  }
}

const arrayI: BinarySearch = new BinarySearch([10, 8, 9, 100, 3, 78, 23, 1])
const pas: Searcher = new Searcher(arrayI)

pas.pass(78)

// ts-node index.ts
