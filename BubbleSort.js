// C# program for implementation  
// of Bubble Sort 
using System; 
  
class GFG 
{  
    static void bubbleSort(int []arr) 
    { 
        int n = arr.Length; 
        for (int i = 0; i < n - 1; i++) 
            for (int j = 0; j < n - i - 1; j++) 
                if (arr[j] > arr[j + 1]) 
                { 
                    // swap temp and arr[i] 
                    int temp = arr[j]; 
                    arr[j] = arr[j + 1]; 
                    arr[j + 1] = temp; 
                } 
    } 
  
    /* Prints the array */
    static void printArray(int []arr) 
    { 
        int n = arr.Length; 
        for (int i = 0; i < n; ++i) 
            Console.Write(arr[i] + " "); 
        Console.WriteLine(); 
    } 
  
    // Driver method 
    public static void Main() 
    { 
        int []arr = {64, 34, 25, 12, 22, 11, 90}; 
        bubbleSort(arr); 
        Console.WriteLine("Sorted array"); 
        printArray(arr); 
    } 
  
} 

//BubbleSort Algorithm
  //algorithm Bubble_Sort(list)
//Pre: list != fi
//Post: list is sorted in ascending order for all values
//for i <- 0 to list:Count - 1
//for j <- 0 to list:Count - 1
//if list[i] < list[j]
//Swap(list[i]; list[j])
//end if
//end for
//end for
//return list
//end Bubble_Sort