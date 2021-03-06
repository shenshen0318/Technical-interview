function quickSort(num) {
   return quick(num,0,num.length-1)
}

function swap(num,x,y){
    let temp = num[x]
    num[x]=num[y]
    num[y] = temp
}

function median(num,left,right) {
    let center = Math.floor((left+right)/2)

    if(num[left] > num[center]){
        swap(num,left,center)
    }
    if(num[center] > num[right]){
        swap(num,center,right)
    }
    if(num[left] > num[right]){
        swap(num,left,right)
    }
    swap(center,right-1)
    return num[right-1]
}

function quick(num,left,right) {
    if(left>=right) return num
    let pivot = median(num,left,right)
    let i=left
    let j =right-1

    while(true){
        while(num[i++]<pivot){}
        while(num[j--]>pivot){}
        if(i<j){
            swap(num,i,j)
        }else{
            break
        }
    }

    swap(num,i,right-1)

    //分而治之
    quick(num,left,i-1)
    quick(num,i+1,right)

}


console.log(quickSort([1,23,4,21,3,2,65,332,2]))
