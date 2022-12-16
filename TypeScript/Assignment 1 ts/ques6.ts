class A
{
    private str:string;
 
    setData(str:string):void
    {
        this.str=str;
    }
 
    countChar(str:string):void
    {
        if(str.charAt(0)=='a'||str.charAt(0)=='u'||str.charAt(0)=='e'||str.charAt(0)=='i'||str.charAt(0)=='o')
        {
            let count=0;
            for(var i=0;i<str.length;i++)
            {
                if(str.charAt(i)=='a'||str.charAt(i)=='u'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o')
                {
                   count++;   
                }
 

            }
            console.log(str.split(" ").join("").length-count);
        }
        else
        {
            let count=0;
            for(var i=0;i<str.length;i++)
            {
                if(str.charAt(i)=='a'||str.charAt(i)=='u'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o')
                {
                    count++;
                }
                else
                {
                }
 
            }
            console.log(count)
 
        }
    }
 
}
 
let obj=new A();
obj.countChar("Count vowels in this");

