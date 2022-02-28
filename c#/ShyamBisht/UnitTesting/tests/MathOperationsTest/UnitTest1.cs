using Xunit;

namespace MathOperationsTest;

public class UnitTest1
{
    [Fact]
    public void add_two_numbers()
    {
        var num1 = 10;
        var num2 = 15;
        var result = MathOperations.Class1.add(num1, num2);
        Assert.Equal(25,result);
    }

    [Theory]
    [InlineData(5, 10, 5)]
    [InlineData(999, 1000, 1)]
    [InlineData(250, 500, 250)]
    [InlineData(200, 100, -100)]

     public void subtract_two_numbers(int num1, int num2, int expected)
    {
        
        var result = MathOperations.Class1.subtract(num1, num2);
        Assert.Equal(expected,result);
    }

    [Theory]
    [InlineData("Te", "st", "Test")]

     public void join_two_string(string str1, string str2, string expected)
    {
        string result = MathOperations.Class1.join_string(str1, str2);
        Assert.Equal(expected ,result);
    }

}