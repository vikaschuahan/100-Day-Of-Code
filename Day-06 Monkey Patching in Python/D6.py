import time

"""
MONKEY PATCHING EXAMPLE
Monkey patching = replacing/modifying code at runtime without changing source
"""

# ===== External library code (simulating 3rd party library) =====
class ExternalService:
    def fetch_data(self):
        # Simulates a slow network call (takes 5 seconds)
        print("Starting slow network call")
        time.sleep(5)
        return "Real Data From Server"

api_service = ExternalService()
# ===== End of library code =====

# Function to test the ORIGINAL (slow) code
def run_original_call():
    start_time = time.time()
    result = api_service.fetch_data()  # calls slow method
    end_time = time.time()
    print("Result:", result)
    print("Time taken: {}".format(end_time - start_time))

# Mock function - a fake version of fetch_data for testing
def mock_fetch_data(self):
    # Instead of waiting 5 seconds, return fake data instantly
    print("Mock - Bypassing network call")
    return "Mocked Test Data"

# Function to test the PATCHED (fast) code
def run_patched_call():
    """
    Replace the real method with mock method at runtime
    This is MONKEY PATCHING!
    """
    # Monkey patch: replace fetch_data with our mock version
    api_service.fetch_data = lambda: mock_fetch_data(api_service)
    
    start_time = time.time()
    result = api_service.fetch_data()  # now calls mock (fast)
    end_time = time.time()
    print("Result:", result)
    print("Time Taken: {}".format(end_time - start_time))

if __name__ == "__main__":
    print("=== Original Call (5 sec wait) ===")
    run_original_call()
    
    print("\n=== Patched Call (instant) ===")
    run_patched_call()

"""
⚠️ WARNINGS ABOUT MONKEY PATCHING:

1. HARD TO DEBUG
   - Code changes at runtime, so it's hard to track what's happening
   - Other developers may not know the method was patched

2. BREAKS EXISTING CODE
   - If you patch a method, it affects ALL code using that method
   - Can cause unexpected bugs in other parts of your program

3. CAUSES CONFLICTS
   - If multiple libraries patch the same method, they conflict
   - Can lead to unpredictable behavior

4. NOT RECOMMENDED FOR PRODUCTION
   - Use mocking libraries (unittest.mock, pytest) instead
   - Only use monkey patching for testing or prototyping

5. POOR CODE QUALITY
   - Makes code harder to understand
   - Makes testing harder
   - Violates "clean code" principles

✅ BEST PRACTICES:
   - Use unittest.mock or pytest for testing
   - Document if you must use monkey patching
   - Only patch in test code, not production code
   - Restore original method after patching
"""