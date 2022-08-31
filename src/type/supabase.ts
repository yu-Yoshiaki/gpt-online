/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/reserve": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.reserve.id"];
          created_at?: parameters["rowFilter.reserve.created_at"];
          date?: parameters["rowFilter.reserve.date"];
          userId?: parameters["rowFilter.reserve.userId"];
          member?: parameters["rowFilter.reserve.member"];
          status?: parameters["rowFilter.reserve.status"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["reserve"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** reserve */
          reserve?: definitions["reserve"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.reserve.id"];
          created_at?: parameters["rowFilter.reserve.created_at"];
          date?: parameters["rowFilter.reserve.date"];
          userId?: parameters["rowFilter.reserve.userId"];
          member?: parameters["rowFilter.reserve.member"];
          status?: parameters["rowFilter.reserve.status"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.reserve.id"];
          created_at?: parameters["rowFilter.reserve.created_at"];
          date?: parameters["rowFilter.reserve.date"];
          userId?: parameters["rowFilter.reserve.userId"];
          member?: parameters["rowFilter.reserve.member"];
          status?: parameters["rowFilter.reserve.status"];
        };
        body: {
          /** reserve */
          reserve?: definitions["reserve"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          full_name?: parameters["rowFilter.users.full_name"];
          line_id?: parameters["rowFilter.users.line_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users */
          users?: definitions["users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          full_name?: parameters["rowFilter.users.full_name"];
          line_id?: parameters["rowFilter.users.line_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          full_name?: parameters["rowFilter.users.full_name"];
          line_id?: parameters["rowFilter.users.line_id"];
        };
        body: {
          /** users */
          users?: definitions["users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/customers": {
    get: {
      parameters: {
        query: {
          lineid?: parameters["rowFilter.customers.lineid"];
          phone?: parameters["rowFilter.customers.phone"];
          email?: parameters["rowFilter.customers.email"];
          address?: parameters["rowFilter.customers.address"];
          inserted_at?: parameters["rowFilter.customers.inserted_at"];
          updated_at?: parameters["rowFilter.customers.updated_at"];
          username?: parameters["rowFilter.customers.username"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["customers"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** customers */
          customers?: definitions["customers"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          lineid?: parameters["rowFilter.customers.lineid"];
          phone?: parameters["rowFilter.customers.phone"];
          email?: parameters["rowFilter.customers.email"];
          address?: parameters["rowFilter.customers.address"];
          inserted_at?: parameters["rowFilter.customers.inserted_at"];
          updated_at?: parameters["rowFilter.customers.updated_at"];
          username?: parameters["rowFilter.customers.username"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          lineid?: parameters["rowFilter.customers.lineid"];
          phone?: parameters["rowFilter.customers.phone"];
          email?: parameters["rowFilter.customers.email"];
          address?: parameters["rowFilter.customers.address"];
          inserted_at?: parameters["rowFilter.customers.inserted_at"];
          updated_at?: parameters["rowFilter.customers.updated_at"];
          username?: parameters["rowFilter.customers.username"];
        };
        body: {
          /** customers */
          customers?: definitions["customers"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  reserve: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: date */
    date: string;
    /** Format: uuid */
    userId: string;
    /** Format: integer */
    member: number;
    /** Format: text */
    status: string;
  };
  users: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    full_name?: string;
    /**
     * Format: text
     * @default
     */
    line_id: string;
  };
  customers: {
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    lineid: string;
    /** Format: character varying */
    phone: string;
    /** Format: character varying */
    email: string;
    /** Format: character varying */
    address?: string;
    /**
     * Format: timestamp with time zone
     * @default timezone(''::text, now())
     */
    inserted_at: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /** Format: character varying */
    username: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description reserve */
  "body.reserve": definitions["reserve"];
  /** Format: bigint */
  "rowFilter.reserve.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.reserve.created_at": string;
  /** Format: date */
  "rowFilter.reserve.date": string;
  /** Format: uuid */
  "rowFilter.reserve.userId": string;
  /** Format: integer */
  "rowFilter.reserve.member": string;
  /** Format: text */
  "rowFilter.reserve.status": string;
  /** @description users */
  "body.users": definitions["users"];
  /** Format: uuid */
  "rowFilter.users.id": string;
  /** Format: text */
  "rowFilter.users.full_name": string;
  /** Format: text */
  "rowFilter.users.line_id": string;
  /** @description customers */
  "body.customers": definitions["customers"];
  /** Format: character varying */
  "rowFilter.customers.lineid": string;
  /** Format: character varying */
  "rowFilter.customers.phone": string;
  /** Format: character varying */
  "rowFilter.customers.email": string;
  /** Format: character varying */
  "rowFilter.customers.address": string;
  /** Format: timestamp with time zone */
  "rowFilter.customers.inserted_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.customers.updated_at": string;
  /** Format: character varying */
  "rowFilter.customers.username": string;
}

export interface operations {}

export interface external {}
