def sum_to(num)
    return nil if num < 0
    if num == 1
        return 1
    else
        num + sum_to(num-1) 
    end
end
p sum_to(5)  # => returns 15
p sum_to(1)  # => returns 1
p sum_to(9)  # => returns 45
p sum_to(-8)  # => returns nil

def add_numbers(arr)
    return arr[0] if arr.length == 1
    return nil if arr.empty?
    return arr[-1] + add_numbers(arr[0...-1])
end
p add_numbers([1,2,3,4]) # => returns 10
p add_numbers([3]) # => returns 3
p add_numbers([-80,34,7]) # => returns -39
p add_numbers([]) # => returns nil

def gamma_fnc(n)
    return nil if n == 0
    return 1 if n == 1
    return (n-1) * gamma_fnc(n-1)
end

p gamma_fnc(0)  # => returns nil
p gamma_fnc(1)  # => returns 1
p gamma_fnc(4)  # => returns 6
p gamma_fnc(8)  # => returns 5040

def ice_cream_shop(arr, flavor)
    return false if arr.empty?
    if arr[-1] == flavor
        return true
    else
        arr.pop()
        ice_cream_shop(arr, flavor)
    end
end


p ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
p ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true
p ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  # => returns false
p ice_cream_shop(['moose tracks'], 'moose tracks')  # => returns true
p ice_cream_shop([], 'honey lavender')  # => returns false

def reverse(string)
    if string.length == 0
        return ''
    else
        string[-1] + reverse(string[0...-1])
    end
end
p reverse("house") # => "esuoh"
p reverse("dog") # => "god"
p reverse("atom") # => "mota"
p reverse("q") # => "q"
p reverse("id") # => "di"
p reverse("") # => ""

