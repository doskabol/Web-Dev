def sum_even(numbers):
    cnt = 0
    for i in numbers:
        if i % 2 == 0:
            cnt += i
    return cnt

a = [1,2,3,4,5,6]
print(sum_even(a))