# Resource Not Found Exception

class ResourceNotFound(Exception):

    def __init__(self, message):
        self.message = message
