var Sortt = (arr:number[])=>
{
    let l=arr.length;
    let temp;
    for(let i=0;i<l-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            i=-1;
        }

    }
    
    console.log(arr);
}
Sortt([1,323,42,123]);
Sortt([2,321,2312,231223]);