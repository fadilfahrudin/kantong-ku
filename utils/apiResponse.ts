import { ZodError } from "zod";

export class ApiResponse {
    static success<T>(
        data: T,
        message = "Success",
        status = 200
    ) {
        return Response.json(
            {
                success: true,
                message,
                timestamp: new Date().toISOString(),
                data,
            },
            { status }
        );
    }

    static error(
        message = "Internal Server Error",
        status = 500,
        errors?: unknown
    ) {
        return Response.json(
            {
                success: false,
                message,
                timestamp: new Date().toISOString(),
                errors,
            },
            { status }
        );
    }

    static validation(error: ZodError) {
        return Response.json(
            {
                success: false,
                message: "Validation Error",
                timestamp: new Date().toISOString(),
                errors: error.flatten(),
            },
            { status: 422 }
        );
    }
}