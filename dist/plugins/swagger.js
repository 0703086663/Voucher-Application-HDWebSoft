"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HapiSwagger = __importStar(require("hapi-swagger"));
var swaggerOptions = {
    swagger: "3.0.0",
    info: {
        title: "Voucher API",
        description: "Voucher API documentation",
        license: {
            name: "Apache 2.0",
            url: "http://www.apache.org/licenses/LICENSE-2.0.html",
        },
        version: "1.0.0",
    },
    schemes: ["https", "http"],
    tags: [
        {
            name: "voucher",
            description: "Everything about your vouchers",
        },
        {
            name: "event",
            description: "Access to voucher event orders",
        },
        {
            name: "user",
            description: "Operations about user",
        },
    ],
    paths: {
        "/voucher": {
            get: {
                tags: ["voucher"],
                summary: "Find all vouchers",
                operationId: "getVouchers",
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "integer",
                                        format: "int32",
                                    },
                                },
                            },
                        },
                    },
                },
                security: [
                    {
                        api_key: [],
                    },
                ],
            },
            put: {
                tags: ["voucher"],
                summary: "Update an existing voucher",
                operationId: "updateVoucher",
                requestBody: {
                    $ref: "#/components/requestBodies/voucher",
                },
                responses: {
                    "400": {
                        description: "Invalid ID supplied",
                    },
                    "404": {
                        description: "voucher not found",
                    },
                    "405": {
                        description: "Validation exception",
                    },
                },
                security: [
                    {
                        voucherevent_auth: ["write:vouchers", "read:vouchers"],
                    },
                ],
            },
            post: {
                tags: ["voucher"],
                summary: "Add a new voucher",
                operationId: "createVoucher",
                requestBody: {
                    $ref: "#/components/requestBodies/voucher",
                },
                responses: {
                    "405": {
                        description: "Invalid input",
                    },
                },
                security: [
                    {
                        voucherevent_auth: ["write:vouchers", "read:vouchers"],
                    },
                ],
            },
        },
        "/voucher/{voucherId}": {
            get: {
                tags: ["voucher"],
                summary: "Find voucher by ID",
                description: "Returns a single voucher",
                operationId: "getVoucher",
                parameters: [
                    {
                        name: "voucherId",
                        in: "path",
                        description: "ID of voucher to return",
                        required: true,
                        style: "simple",
                        explode: false,
                        schema: {
                            type: "integer",
                            format: "int64",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/voucher",
                                },
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/voucher",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid ID supplied",
                    },
                    "404": {
                        description: "voucher not found",
                    },
                },
                security: [
                    {
                        api_key: [],
                    },
                ],
            },
            delete: {
                tags: ["voucher"],
                summary: "Deletes a voucher",
                operationId: "deleteVoucher",
                parameters: [
                    {
                        name: "api_key",
                        in: "header",
                        required: false,
                        style: "simple",
                        explode: false,
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        name: "voucherId",
                        in: "path",
                        description: "voucher id to delete",
                        required: true,
                        style: "simple",
                        explode: false,
                        schema: {
                            type: "integer",
                            format: "int64",
                        },
                    },
                ],
                responses: {
                    "400": {
                        description: "Invalid ID supplied",
                    },
                    "404": {
                        description: "voucher not found",
                    },
                },
                security: [
                    {
                        voucherevent_auth: ["write:vouchers", "read:vouchers"],
                    },
                ],
            },
        },
        "/event": {
            get: {
                tags: ["event"],
                summary: "Returns all events in database",
                description: "Returns a list of events sorted by date",
                operationId: "getEvents",
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "integer",
                                        format: "int32",
                                    },
                                },
                            },
                        },
                    },
                },
                security: [
                    {
                        api_key: [],
                    },
                ],
            },
            post: {
                tags: ["event"],
                summary: "Place an order for a voucher",
                operationId: "createEvent",
                requestBody: {
                    description: "order placed for purchasing the voucher",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Event",
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Event",
                                },
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/Event",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid Order",
                    },
                },
            },
        },
        "/event/{eventId}": {
            get: {
                tags: ["event"],
                summary: "Find purchase order by ID",
                description: "For valid response try integer IDs with value >= 1 and <= 10.\\ \\ Other values will generated exceptions",
                operationId: "getEvent",
                parameters: [
                    {
                        name: "eventId",
                        in: "path",
                        description: "ID of voucher that needs to be fetched",
                        required: true,
                        style: "simple",
                        explode: false,
                        schema: {
                            maximum: 10,
                            minimum: 1,
                            type: "integer",
                            format: "int64",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Event",
                                },
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/Event",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid ID supplied",
                    },
                    "404": {
                        description: "Order not found",
                    },
                },
            },
            delete: {
                tags: ["event"],
                summary: "Delete purchase order by ID",
                description: "For valid response try integer IDs with positive integer value.\\ \\ Negative or non-integer values will generate API errors",
                operationId: "deleteEvent",
                parameters: [
                    {
                        name: "eventId",
                        in: "path",
                        description: "ID of the order that needs to be deleted",
                        required: true,
                        style: "simple",
                        explode: false,
                        schema: {
                            minimum: 1,
                            type: "integer",
                            format: "int64",
                        },
                    },
                ],
                responses: {
                    "400": {
                        description: "Invalid ID supplied",
                    },
                    "404": {
                        description: "Order not found",
                    },
                },
            },
        },
        "/user": {
            get: {
                tags: ["user"],
                summary: "Find all users",
                operationId: "getUsers",
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    additionalProperties: {
                                        type: "integer",
                                        format: "int32",
                                    },
                                },
                            },
                        },
                    },
                },
                security: [
                    {
                        api_key: [],
                    },
                ],
            },
            post: {
                tags: ["user"],
                summary: "Create user",
                description: "This can only be done by the logged in user.",
                operationId: "createUser",
                requestBody: {
                    description: "Created user object",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    default: {
                        description: "successful operation",
                    },
                },
            },
        },
        "/user/{username}": {
            get: {
                tags: ["user"],
                summary: "Get user by user name",
                operationId: "getUser",
                parameters: [
                    {
                        name: "username",
                        in: "path",
                        description: "The name that needs to be fetched. Use user1 for testing.",
                        required: true,
                        style: "simple",
                        explode: false,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "successful operation",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/User",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid username supplied",
                    },
                    "404": {
                        description: "User not found",
                    },
                },
            },
            put: {
                tags: ["user"],
                summary: "Updated user",
                description: "This can only be done by the logged in user.",
                operationId: "updateUser",
                parameters: [
                    {
                        name: "username",
                        in: "path",
                        description: "name that need to be updated",
                        required: true,
                        style: "simple",
                        explode: false,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    description: "Updated user object",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    "400": {
                        description: "Invalid user supplied",
                    },
                    "404": {
                        description: "User not found",
                    },
                },
            },
            delete: {
                tags: ["user"],
                summary: "Delete user",
                description: "This can only be done by the logged in user.",
                operationId: "deleteUser",
                parameters: [
                    {
                        name: "username",
                        in: "path",
                        description: "The name that needs to be deleted",
                        required: true,
                        style: "simple",
                        explode: false,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    "400": {
                        description: "Invalid username supplied",
                    },
                    "404": {
                        description: "User not found",
                    },
                },
            },
        },
    },
    definitions: {
        Event: {
            type: "object",
            properties: {
                id: {
                    type: "integer",
                    format: "int64",
                },
                desc: {
                    type: "string",
                },
                voucherId: {
                    $ref: "#/components/schemas/voucher/properties/id",
                },
                quantity: {
                    type: "integer",
                    format: "int32",
                    default: 0,
                },
                enable: {
                    type: "boolean",
                    default: false,
                },
                endDate: {
                    type: "string",
                    format: "date-time",
                },
            },
            xml: {
                name: "Event",
            },
        },
        User: {
            type: "object",
            properties: {
                id: {
                    type: "integer",
                    format: "int64",
                },
                username: {
                    type: "string",
                },
                fullName: {
                    type: "string",
                },
                password: {
                    type: "string",
                },
            },
            xml: {
                name: "User",
            },
        },
        voucher: {
            required: ["code", "discount"],
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "int64",
                },
                code: {
                    type: "string",
                    example: "ABCD1234",
                },
                discount: {
                    type: "number",
                },
                desc: {
                    type: "string",
                },
                constraints: {
                    type: "string",
                    example: "1 user 1 voucher",
                },
            },
            xml: {
                name: "voucher",
            },
        },
    },
    securityDefinitions: {
        voucherevent_auth: {
            type: "oauth2",
            flows: {
                implicit: {
                    authorizationUrl: "http://voucherevent.swagger.io/oauth/dialog",
                    scopes: {
                        "write:vouchers": "modify vouchers in your account",
                        "read:vouchers": "read your vouchers",
                    },
                },
            },
        },
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header",
        },
    },
};
exports.default = {
    plugin: HapiSwagger,
    options: swaggerOptions,
};
//# sourceMappingURL=swagger.js.map