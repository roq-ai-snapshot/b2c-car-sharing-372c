/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model booking
 *
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>;
/**
 * Model car
 *
 */
export type car = $Result.DefaultSelection<Prisma.$carPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model operations_dashboard
 *
 */
export type operations_dashboard = $Result.DefaultSelection<Prisma.$operations_dashboardPayload>;
/**
 * Model operations_staff
 *
 */
export type operations_staff = $Result.DefaultSelection<Prisma.$operations_staffPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.bookingDelegate<ExtArgs>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **car** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   */
  get car(): Prisma.carDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.operations_dashboard`: Exposes CRUD operations for the **operations_dashboard** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Operations_dashboards
   * const operations_dashboards = await prisma.operations_dashboard.findMany()
   * ```
   */
  get operations_dashboard(): Prisma.operations_dashboardDelegate<ExtArgs>;

  /**
   * `prisma.operations_staff`: Exposes CRUD operations for the **operations_staff** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Operations_staffs
   * const operations_staffs = await prisma.operations_staff.findMany()
   * ```
   */
  get operations_staff(): Prisma.operations_staffDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.0
   * Query Engine version: 475c616176945d72f4330c92801f0c5e6398dc0f
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    booking: 'booking';
    car: 'car';
    company: 'company';
    operations_dashboard: 'operations_dashboard';
    operations_staff: 'operations_staff';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'booking' | 'car' | 'company' | 'operations_dashboard' | 'operations_staff' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>;
        fields: Prisma.bookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[];
          };
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      car: {
        payload: Prisma.$carPayload<ExtArgs>;
        fields: Prisma.carFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.carFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.carFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          findFirst: {
            args: Prisma.carFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.carFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          findMany: {
            args: Prisma.carFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>[];
          };
          create: {
            args: Prisma.carCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          createMany: {
            args: Prisma.carCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.carDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          update: {
            args: Prisma.carUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          deleteMany: {
            args: Prisma.carDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.carUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.carUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCar>;
          };
          groupBy: {
            args: Prisma.carGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarGroupByOutputType>[];
          };
          count: {
            args: Prisma.carCountArgs<ExtArgs>;
            result: $Utils.Optional<CarCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      operations_dashboard: {
        payload: Prisma.$operations_dashboardPayload<ExtArgs>;
        fields: Prisma.operations_dashboardFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.operations_dashboardFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.operations_dashboardFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload>;
          };
          findFirst: {
            args: Prisma.operations_dashboardFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.operations_dashboardFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload>;
          };
          findMany: {
            args: Prisma.operations_dashboardFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload>[];
          };
          create: {
            args: Prisma.operations_dashboardCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload>;
          };
          createMany: {
            args: Prisma.operations_dashboardCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.operations_dashboardDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload>;
          };
          update: {
            args: Prisma.operations_dashboardUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload>;
          };
          deleteMany: {
            args: Prisma.operations_dashboardDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.operations_dashboardUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.operations_dashboardUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_dashboardPayload>;
          };
          aggregate: {
            args: Prisma.Operations_dashboardAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOperations_dashboard>;
          };
          groupBy: {
            args: Prisma.operations_dashboardGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Operations_dashboardGroupByOutputType>[];
          };
          count: {
            args: Prisma.operations_dashboardCountArgs<ExtArgs>;
            result: $Utils.Optional<Operations_dashboardCountAggregateOutputType> | number;
          };
        };
      };
      operations_staff: {
        payload: Prisma.$operations_staffPayload<ExtArgs>;
        fields: Prisma.operations_staffFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.operations_staffFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.operations_staffFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload>;
          };
          findFirst: {
            args: Prisma.operations_staffFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.operations_staffFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload>;
          };
          findMany: {
            args: Prisma.operations_staffFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload>[];
          };
          create: {
            args: Prisma.operations_staffCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload>;
          };
          createMany: {
            args: Prisma.operations_staffCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.operations_staffDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload>;
          };
          update: {
            args: Prisma.operations_staffUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload>;
          };
          deleteMany: {
            args: Prisma.operations_staffDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.operations_staffUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.operations_staffUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_staffPayload>;
          };
          aggregate: {
            args: Prisma.Operations_staffAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOperations_staff>;
          };
          groupBy: {
            args: Prisma.operations_staffGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Operations_staffGroupByOutputType>[];
          };
          count: {
            args: Prisma.operations_staffCountArgs<ExtArgs>;
            result: $Utils.Optional<Operations_staffCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    booking: number;
  };

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | CarCountOutputTypeCountBookingArgs;
  };

  // Custom InputTypes

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    car: number;
    operations_dashboard: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CompanyCountOutputTypeCountCarArgs;
    operations_dashboard?: boolean | CompanyCountOutputTypeCountOperations_dashboardArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOperations_dashboardArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: operations_dashboardWhereInput;
  };

  /**
   * Count Type Operations_dashboardCountOutputType
   */

  export type Operations_dashboardCountOutputType = {
    operations_staff: number;
  };

  export type Operations_dashboardCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    operations_staff?: boolean | Operations_dashboardCountOutputTypeCountOperations_staffArgs;
  };

  // Custom InputTypes

  /**
   * Operations_dashboardCountOutputType without action
   */
  export type Operations_dashboardCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Operations_dashboardCountOutputType
     */
    select?: Operations_dashboardCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Operations_dashboardCountOutputType without action
   */
  export type Operations_dashboardCountOutputTypeCountOperations_staffArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: operations_staffWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    booking: number;
    company: number;
    operations_staff: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | UserCountOutputTypeCountBookingArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    operations_staff?: boolean | UserCountOutputTypeCountOperations_staffArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: bookingWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOperations_staffArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: operations_staffWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    pickup_location: string | null;
    dropoff_location: string | null;
    user_id: string | null;
    car_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    pickup_location: string | null;
    dropoff_location: string | null;
    user_id: string | null;
    car_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    start_time: number;
    end_time: number;
    pickup_location: number;
    dropoff_location: number;
    user_id: number;
    car_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    pickup_location?: true;
    dropoff_location?: true;
    user_id?: true;
    car_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    pickup_location?: true;
    dropoff_location?: true;
    user_id?: true;
    car_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    pickup_location?: true;
    dropoff_location?: true;
    user_id?: true;
    car_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: bookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    start_time: Date;
    end_time: Date;
    pickup_location: string;
    dropoff_location: string;
    user_id: string;
    car_id: string;
    created_at: Date;
    updated_at: Date;
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
          : GetScalarType<T[P], BookingGroupByOutputType[P]>;
      }
    >
  >;

  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      start_time?: boolean;
      end_time?: boolean;
      pickup_location?: boolean;
      dropoff_location?: boolean;
      user_id?: boolean;
      car_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      car?: boolean | carDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type bookingSelectScalar = {
    id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    pickup_location?: boolean;
    dropoff_location?: boolean;
    user_id?: boolean;
    car_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'booking';
    objects: {
      car: Prisma.$carPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_time: Date;
        end_time: Date;
        pickup_location: string;
        dropoff_location: string;
        user_id: string;
        car_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<
    Prisma.$bookingPayload,
    S
  >;

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bookingFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking']; meta: { name: 'booking' } };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     **/
    create<T extends bookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingCreateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bookings.
     *     @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     **/
    delete<T extends bookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     **/
    upsert<T extends bookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the booking model
     */
    readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends carDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, carDefaultArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<'booking', 'String'>;
    readonly start_time: FieldRef<'booking', 'DateTime'>;
    readonly end_time: FieldRef<'booking', 'DateTime'>;
    readonly pickup_location: FieldRef<'booking', 'String'>;
    readonly dropoff_location: FieldRef<'booking', 'String'>;
    readonly user_id: FieldRef<'booking', 'String'>;
    readonly car_id: FieldRef<'booking', 'String'>;
    readonly created_at: FieldRef<'booking', 'DateTime'>;
    readonly updated_at: FieldRef<'booking', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
  };

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>;
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput;
  };

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput;
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
  };

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput;
  };

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
  };

  /**
   * Model car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  export type CarAvgAggregateOutputType = {
    year: number | null;
    mileage: number | null;
  };

  export type CarSumAggregateOutputType = {
    year: number | null;
    mileage: number | null;
  };

  export type CarMinAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    license_plate: string | null;
    mileage: number | null;
    status: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CarMaxAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    license_plate: string | null;
    mileage: number | null;
    status: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CarCountAggregateOutputType = {
    id: number;
    make: number;
    model: number;
    year: number;
    color: number;
    license_plate: number;
    mileage: number;
    status: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CarAvgAggregateInputType = {
    year?: true;
    mileage?: true;
  };

  export type CarSumAggregateInputType = {
    year?: true;
    mileage?: true;
  };

  export type CarMinAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    license_plate?: true;
    mileage?: true;
    status?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CarMaxAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    license_plate?: true;
    mileage?: true;
    status?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CarCountAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    license_plate?: true;
    mileage?: true;
    status?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car to aggregate.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cars
     **/
    _count?: true | CarCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarMaxAggregateInputType;
  };

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
    [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>;
  };

  export type carGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput;
    orderBy?: carOrderByWithAggregationInput | carOrderByWithAggregationInput[];
    by: CarScalarFieldEnum[] | CarScalarFieldEnum;
    having?: carScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarCountAggregateInputType | true;
    _avg?: CarAvgAggregateInputType;
    _sum?: CarSumAggregateInputType;
    _min?: CarMinAggregateInputType;
    _max?: CarMaxAggregateInputType;
  };

  export type CarGroupByOutputType = {
    id: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  type GetCarGroupByPayload<T extends carGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CarGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CarGroupByOutputType[P]>
          : GetScalarType<T[P], CarGroupByOutputType[P]>;
      }
    >
  >;

  export type carSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      year?: boolean;
      color?: boolean;
      license_plate?: boolean;
      mileage?: boolean;
      status?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | car$bookingArgs<ExtArgs>;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['car']
  >;

  export type carSelectScalar = {
    id?: boolean;
    make?: boolean;
    model?: boolean;
    year?: boolean;
    color?: boolean;
    license_plate?: boolean;
    mileage?: boolean;
    status?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type carInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | car$bookingArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $carPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'car';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        make: string;
        model: string;
        year: number;
        color: string;
        license_plate: string;
        mileage: number;
        status: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['car']
    >;
    composites: {};
  };

  type carGetPayload<S extends boolean | null | undefined | carDefaultArgs> = $Result.GetResult<Prisma.$carPayload, S>;

  type carCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    carFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CarCountAggregateInputType | true;
  };

  export interface carDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car']; meta: { name: 'car' } };
    /**
     * Find zero or one Car that matches the filter.
     * @param {carFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends carFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, carFindUniqueArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Car that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {carFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends carFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends carFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindFirstArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends carFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     *
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends carFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Car.
     * @param {carCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     *
     **/
    create<T extends carCreateArgs<ExtArgs>>(
      args: SelectSubset<T, carCreateArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Cars.
     *     @param {carCreateManyArgs} args - Arguments to create many Cars.
     *     @example
     *     // Create many Cars
     *     const car = await prisma.car.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends carCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Car.
     * @param {carDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     *
     **/
    delete<T extends carDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, carDeleteArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Car.
     * @param {carUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends carUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, carUpdateArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Cars.
     * @param {carDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends carDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends carUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, carUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Car.
     * @param {carUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     **/
    upsert<T extends carUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, carUpsertArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
     **/
    count<T extends carCountArgs>(
      args?: Subset<T, carCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CarAggregateArgs>(
      args: Subset<T, CarAggregateArgs>,
    ): Prisma.PrismaPromise<GetCarAggregateType<T>>;

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends carGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carGroupByArgs['orderBy'] }
        : { orderBy?: carGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, carGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the car model
     */
    readonly fields: carFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends car$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, car$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the car model
   */
  interface carFieldRefs {
    readonly id: FieldRef<'car', 'String'>;
    readonly make: FieldRef<'car', 'String'>;
    readonly model: FieldRef<'car', 'String'>;
    readonly year: FieldRef<'car', 'Int'>;
    readonly color: FieldRef<'car', 'String'>;
    readonly license_plate: FieldRef<'car', 'String'>;
    readonly mileage: FieldRef<'car', 'Int'>;
    readonly status: FieldRef<'car', 'String'>;
    readonly company_id: FieldRef<'car', 'String'>;
    readonly created_at: FieldRef<'car', 'DateTime'>;
    readonly updated_at: FieldRef<'car', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * car findUnique
   */
  export type carFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car findUniqueOrThrow
   */
  export type carFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car findFirst
   */
  export type carFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car findFirstOrThrow
   */
  export type carFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car findMany
   */
  export type carFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which cars to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car create
   */
  export type carCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The data needed to create a car.
     */
    data: XOR<carCreateInput, carUncheckedCreateInput>;
  };

  /**
   * car createMany
   */
  export type carCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cars.
     */
    data: carCreateManyInput | carCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * car update
   */
  export type carUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The data needed to update a car.
     */
    data: XOR<carUpdateInput, carUncheckedUpdateInput>;
    /**
     * Choose, which car to update.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car updateMany
   */
  export type carUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cars.
     */
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyInput>;
    /**
     * Filter which cars to update
     */
    where?: carWhereInput;
  };

  /**
   * car upsert
   */
  export type carUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The filter to search for the car to update in case it exists.
     */
    where: carWhereUniqueInput;
    /**
     * In case the car found by the `where` argument doesn't exist, create a new car with this data.
     */
    create: XOR<carCreateInput, carUncheckedCreateInput>;
    /**
     * In case the car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carUpdateInput, carUncheckedUpdateInput>;
  };

  /**
   * car delete
   */
  export type carDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter which car to delete.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car deleteMany
   */
  export type carDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cars to delete
     */
    where?: carWhereInput;
  };

  /**
   * car.booking
   */
  export type car$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * car without action
   */
  export type carDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    country: number;
    postal_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postal_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postal_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postal_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      country?: boolean;
      postal_code?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      car?: boolean | company$carArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      operations_dashboard?: boolean | company$operations_dashboardArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    postal_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | company$carArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    operations_dashboard?: boolean | company$operations_dashboardArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      car: Prisma.$carPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      operations_dashboard: Prisma.$operations_dashboardPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        country: string | null;
        postal_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends company$carArgs<ExtArgs> = {}>(
      args?: Subset<T, company$carArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    operations_dashboard<T extends company$operations_dashboardArgs<ExtArgs> = {}>(
      args?: Subset<T, company$operations_dashboardArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly country: FieldRef<'company', 'String'>;
    readonly postal_code: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.car
   */
  export type company$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    where?: carWhereInput;
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    cursor?: carWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * company.operations_dashboard
   */
  export type company$operations_dashboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    where?: operations_dashboardWhereInput;
    orderBy?: operations_dashboardOrderByWithRelationInput | operations_dashboardOrderByWithRelationInput[];
    cursor?: operations_dashboardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Operations_dashboardScalarFieldEnum | Operations_dashboardScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model operations_dashboard
   */

  export type AggregateOperations_dashboard = {
    _count: Operations_dashboardCountAggregateOutputType | null;
    _min: Operations_dashboardMinAggregateOutputType | null;
    _max: Operations_dashboardMaxAggregateOutputType | null;
  };

  export type Operations_dashboardMinAggregateOutputType = {
    id: string | null;
    dashboard_name: string | null;
    dashboard_description: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Operations_dashboardMaxAggregateOutputType = {
    id: string | null;
    dashboard_name: string | null;
    dashboard_description: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Operations_dashboardCountAggregateOutputType = {
    id: number;
    dashboard_name: number;
    dashboard_description: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Operations_dashboardMinAggregateInputType = {
    id?: true;
    dashboard_name?: true;
    dashboard_description?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Operations_dashboardMaxAggregateInputType = {
    id?: true;
    dashboard_name?: true;
    dashboard_description?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Operations_dashboardCountAggregateInputType = {
    id?: true;
    dashboard_name?: true;
    dashboard_description?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Operations_dashboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operations_dashboard to aggregate.
     */
    where?: operations_dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_dashboards to fetch.
     */
    orderBy?: operations_dashboardOrderByWithRelationInput | operations_dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: operations_dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_dashboards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned operations_dashboards
     **/
    _count?: true | Operations_dashboardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Operations_dashboardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Operations_dashboardMaxAggregateInputType;
  };

  export type GetOperations_dashboardAggregateType<T extends Operations_dashboardAggregateArgs> = {
    [P in keyof T & keyof AggregateOperations_dashboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperations_dashboard[P]>
      : GetScalarType<T[P], AggregateOperations_dashboard[P]>;
  };

  export type operations_dashboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operations_dashboardWhereInput;
    orderBy?: operations_dashboardOrderByWithAggregationInput | operations_dashboardOrderByWithAggregationInput[];
    by: Operations_dashboardScalarFieldEnum[] | Operations_dashboardScalarFieldEnum;
    having?: operations_dashboardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Operations_dashboardCountAggregateInputType | true;
    _min?: Operations_dashboardMinAggregateInputType;
    _max?: Operations_dashboardMaxAggregateInputType;
  };

  export type Operations_dashboardGroupByOutputType = {
    id: string;
    dashboard_name: string;
    dashboard_description: string | null;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Operations_dashboardCountAggregateOutputType | null;
    _min: Operations_dashboardMinAggregateOutputType | null;
    _max: Operations_dashboardMaxAggregateOutputType | null;
  };

  type GetOperations_dashboardGroupByPayload<T extends operations_dashboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operations_dashboardGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Operations_dashboardGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Operations_dashboardGroupByOutputType[P]>
          : GetScalarType<T[P], Operations_dashboardGroupByOutputType[P]>;
      }
    >
  >;

  export type operations_dashboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        dashboard_name?: boolean;
        dashboard_description?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        operations_staff?: boolean | operations_dashboard$operations_staffArgs<ExtArgs>;
        _count?: boolean | Operations_dashboardCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['operations_dashboard']
    >;

  export type operations_dashboardSelectScalar = {
    id?: boolean;
    dashboard_name?: boolean;
    dashboard_description?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type operations_dashboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    operations_staff?: boolean | operations_dashboard$operations_staffArgs<ExtArgs>;
    _count?: boolean | Operations_dashboardCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $operations_dashboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'operations_dashboard';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      operations_staff: Prisma.$operations_staffPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        dashboard_name: string;
        dashboard_description: string | null;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['operations_dashboard']
    >;
    composites: {};
  };

  type operations_dashboardGetPayload<S extends boolean | null | undefined | operations_dashboardDefaultArgs> =
    $Result.GetResult<Prisma.$operations_dashboardPayload, S>;

  type operations_dashboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    operations_dashboardFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Operations_dashboardCountAggregateInputType | true;
  };

  export interface operations_dashboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['operations_dashboard'];
      meta: { name: 'operations_dashboard' };
    };
    /**
     * Find zero or one Operations_dashboard that matches the filter.
     * @param {operations_dashboardFindUniqueArgs} args - Arguments to find a Operations_dashboard
     * @example
     * // Get one Operations_dashboard
     * const operations_dashboard = await prisma.operations_dashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends operations_dashboardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, operations_dashboardFindUniqueArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Operations_dashboard that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {operations_dashboardFindUniqueOrThrowArgs} args - Arguments to find a Operations_dashboard
     * @example
     * // Get one Operations_dashboard
     * const operations_dashboard = await prisma.operations_dashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends operations_dashboardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_dashboardFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Operations_dashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_dashboardFindFirstArgs} args - Arguments to find a Operations_dashboard
     * @example
     * // Get one Operations_dashboard
     * const operations_dashboard = await prisma.operations_dashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends operations_dashboardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_dashboardFindFirstArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Operations_dashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_dashboardFindFirstOrThrowArgs} args - Arguments to find a Operations_dashboard
     * @example
     * // Get one Operations_dashboard
     * const operations_dashboard = await prisma.operations_dashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends operations_dashboardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_dashboardFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Operations_dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_dashboardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations_dashboards
     * const operations_dashboards = await prisma.operations_dashboard.findMany()
     *
     * // Get first 10 Operations_dashboards
     * const operations_dashboards = await prisma.operations_dashboard.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const operations_dashboardWithIdOnly = await prisma.operations_dashboard.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends operations_dashboardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_dashboardFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Operations_dashboard.
     * @param {operations_dashboardCreateArgs} args - Arguments to create a Operations_dashboard.
     * @example
     * // Create one Operations_dashboard
     * const Operations_dashboard = await prisma.operations_dashboard.create({
     *   data: {
     *     // ... data to create a Operations_dashboard
     *   }
     * })
     *
     **/
    create<T extends operations_dashboardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, operations_dashboardCreateArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Operations_dashboards.
     *     @param {operations_dashboardCreateManyArgs} args - Arguments to create many Operations_dashboards.
     *     @example
     *     // Create many Operations_dashboards
     *     const operations_dashboard = await prisma.operations_dashboard.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends operations_dashboardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_dashboardCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Operations_dashboard.
     * @param {operations_dashboardDeleteArgs} args - Arguments to delete one Operations_dashboard.
     * @example
     * // Delete one Operations_dashboard
     * const Operations_dashboard = await prisma.operations_dashboard.delete({
     *   where: {
     *     // ... filter to delete one Operations_dashboard
     *   }
     * })
     *
     **/
    delete<T extends operations_dashboardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, operations_dashboardDeleteArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Operations_dashboard.
     * @param {operations_dashboardUpdateArgs} args - Arguments to update one Operations_dashboard.
     * @example
     * // Update one Operations_dashboard
     * const operations_dashboard = await prisma.operations_dashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends operations_dashboardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, operations_dashboardUpdateArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Operations_dashboards.
     * @param {operations_dashboardDeleteManyArgs} args - Arguments to filter Operations_dashboards to delete.
     * @example
     * // Delete a few Operations_dashboards
     * const { count } = await prisma.operations_dashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends operations_dashboardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_dashboardDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Operations_dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_dashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations_dashboards
     * const operations_dashboard = await prisma.operations_dashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends operations_dashboardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, operations_dashboardUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Operations_dashboard.
     * @param {operations_dashboardUpsertArgs} args - Arguments to update or create a Operations_dashboard.
     * @example
     * // Update or create a Operations_dashboard
     * const operations_dashboard = await prisma.operations_dashboard.upsert({
     *   create: {
     *     // ... data to create a Operations_dashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operations_dashboard we want to update
     *   }
     * })
     **/
    upsert<T extends operations_dashboardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, operations_dashboardUpsertArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Operations_dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_dashboardCountArgs} args - Arguments to filter Operations_dashboards to count.
     * @example
     * // Count the number of Operations_dashboards
     * const count = await prisma.operations_dashboard.count({
     *   where: {
     *     // ... the filter for the Operations_dashboards we want to count
     *   }
     * })
     **/
    count<T extends operations_dashboardCountArgs>(
      args?: Subset<T, operations_dashboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operations_dashboardCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Operations_dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operations_dashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Operations_dashboardAggregateArgs>(
      args: Subset<T, Operations_dashboardAggregateArgs>,
    ): Prisma.PrismaPromise<GetOperations_dashboardAggregateType<T>>;

    /**
     * Group by Operations_dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_dashboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends operations_dashboardGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operations_dashboardGroupByArgs['orderBy'] }
        : { orderBy?: operations_dashboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, operations_dashboardGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOperations_dashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the operations_dashboard model
     */
    readonly fields: operations_dashboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operations_dashboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operations_dashboardClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    operations_staff<T extends operations_dashboard$operations_staffArgs<ExtArgs> = {}>(
      args?: Subset<T, operations_dashboard$operations_staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the operations_dashboard model
   */
  interface operations_dashboardFieldRefs {
    readonly id: FieldRef<'operations_dashboard', 'String'>;
    readonly dashboard_name: FieldRef<'operations_dashboard', 'String'>;
    readonly dashboard_description: FieldRef<'operations_dashboard', 'String'>;
    readonly company_id: FieldRef<'operations_dashboard', 'String'>;
    readonly created_at: FieldRef<'operations_dashboard', 'DateTime'>;
    readonly updated_at: FieldRef<'operations_dashboard', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * operations_dashboard findUnique
   */
  export type operations_dashboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which operations_dashboard to fetch.
     */
    where: operations_dashboardWhereUniqueInput;
  };

  /**
   * operations_dashboard findUniqueOrThrow
   */
  export type operations_dashboardFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which operations_dashboard to fetch.
     */
    where: operations_dashboardWhereUniqueInput;
  };

  /**
   * operations_dashboard findFirst
   */
  export type operations_dashboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which operations_dashboard to fetch.
     */
    where?: operations_dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_dashboards to fetch.
     */
    orderBy?: operations_dashboardOrderByWithRelationInput | operations_dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for operations_dashboards.
     */
    cursor?: operations_dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_dashboards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of operations_dashboards.
     */
    distinct?: Operations_dashboardScalarFieldEnum | Operations_dashboardScalarFieldEnum[];
  };

  /**
   * operations_dashboard findFirstOrThrow
   */
  export type operations_dashboardFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which operations_dashboard to fetch.
     */
    where?: operations_dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_dashboards to fetch.
     */
    orderBy?: operations_dashboardOrderByWithRelationInput | operations_dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for operations_dashboards.
     */
    cursor?: operations_dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_dashboards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of operations_dashboards.
     */
    distinct?: Operations_dashboardScalarFieldEnum | Operations_dashboardScalarFieldEnum[];
  };

  /**
   * operations_dashboard findMany
   */
  export type operations_dashboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which operations_dashboards to fetch.
     */
    where?: operations_dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_dashboards to fetch.
     */
    orderBy?: operations_dashboardOrderByWithRelationInput | operations_dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing operations_dashboards.
     */
    cursor?: operations_dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_dashboards.
     */
    skip?: number;
    distinct?: Operations_dashboardScalarFieldEnum | Operations_dashboardScalarFieldEnum[];
  };

  /**
   * operations_dashboard create
   */
  export type operations_dashboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * The data needed to create a operations_dashboard.
     */
    data: XOR<operations_dashboardCreateInput, operations_dashboardUncheckedCreateInput>;
  };

  /**
   * operations_dashboard createMany
   */
  export type operations_dashboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operations_dashboards.
     */
    data: operations_dashboardCreateManyInput | operations_dashboardCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * operations_dashboard update
   */
  export type operations_dashboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * The data needed to update a operations_dashboard.
     */
    data: XOR<operations_dashboardUpdateInput, operations_dashboardUncheckedUpdateInput>;
    /**
     * Choose, which operations_dashboard to update.
     */
    where: operations_dashboardWhereUniqueInput;
  };

  /**
   * operations_dashboard updateMany
   */
  export type operations_dashboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operations_dashboards.
     */
    data: XOR<operations_dashboardUpdateManyMutationInput, operations_dashboardUncheckedUpdateManyInput>;
    /**
     * Filter which operations_dashboards to update
     */
    where?: operations_dashboardWhereInput;
  };

  /**
   * operations_dashboard upsert
   */
  export type operations_dashboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * The filter to search for the operations_dashboard to update in case it exists.
     */
    where: operations_dashboardWhereUniqueInput;
    /**
     * In case the operations_dashboard found by the `where` argument doesn't exist, create a new operations_dashboard with this data.
     */
    create: XOR<operations_dashboardCreateInput, operations_dashboardUncheckedCreateInput>;
    /**
     * In case the operations_dashboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operations_dashboardUpdateInput, operations_dashboardUncheckedUpdateInput>;
  };

  /**
   * operations_dashboard delete
   */
  export type operations_dashboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
    /**
     * Filter which operations_dashboard to delete.
     */
    where: operations_dashboardWhereUniqueInput;
  };

  /**
   * operations_dashboard deleteMany
   */
  export type operations_dashboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operations_dashboards to delete
     */
    where?: operations_dashboardWhereInput;
  };

  /**
   * operations_dashboard.operations_staff
   */
  export type operations_dashboard$operations_staffArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    where?: operations_staffWhereInput;
    orderBy?: operations_staffOrderByWithRelationInput | operations_staffOrderByWithRelationInput[];
    cursor?: operations_staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Operations_staffScalarFieldEnum | Operations_staffScalarFieldEnum[];
  };

  /**
   * operations_dashboard without action
   */
  export type operations_dashboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_dashboard
     */
    select?: operations_dashboardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_dashboardInclude<ExtArgs> | null;
  };

  /**
   * Model operations_staff
   */

  export type AggregateOperations_staff = {
    _count: Operations_staffCountAggregateOutputType | null;
    _min: Operations_staffMinAggregateOutputType | null;
    _max: Operations_staffMaxAggregateOutputType | null;
  };

  export type Operations_staffMinAggregateOutputType = {
    id: string | null;
    staff_name: string | null;
    staff_role: string | null;
    dashboard_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Operations_staffMaxAggregateOutputType = {
    id: string | null;
    staff_name: string | null;
    staff_role: string | null;
    dashboard_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Operations_staffCountAggregateOutputType = {
    id: number;
    staff_name: number;
    staff_role: number;
    dashboard_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Operations_staffMinAggregateInputType = {
    id?: true;
    staff_name?: true;
    staff_role?: true;
    dashboard_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Operations_staffMaxAggregateInputType = {
    id?: true;
    staff_name?: true;
    staff_role?: true;
    dashboard_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Operations_staffCountAggregateInputType = {
    id?: true;
    staff_name?: true;
    staff_role?: true;
    dashboard_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Operations_staffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operations_staff to aggregate.
     */
    where?: operations_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_staffs to fetch.
     */
    orderBy?: operations_staffOrderByWithRelationInput | operations_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: operations_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned operations_staffs
     **/
    _count?: true | Operations_staffCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Operations_staffMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Operations_staffMaxAggregateInputType;
  };

  export type GetOperations_staffAggregateType<T extends Operations_staffAggregateArgs> = {
    [P in keyof T & keyof AggregateOperations_staff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperations_staff[P]>
      : GetScalarType<T[P], AggregateOperations_staff[P]>;
  };

  export type operations_staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operations_staffWhereInput;
    orderBy?: operations_staffOrderByWithAggregationInput | operations_staffOrderByWithAggregationInput[];
    by: Operations_staffScalarFieldEnum[] | Operations_staffScalarFieldEnum;
    having?: operations_staffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Operations_staffCountAggregateInputType | true;
    _min?: Operations_staffMinAggregateInputType;
    _max?: Operations_staffMaxAggregateInputType;
  };

  export type Operations_staffGroupByOutputType = {
    id: string;
    staff_name: string;
    staff_role: string;
    dashboard_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Operations_staffCountAggregateOutputType | null;
    _min: Operations_staffMinAggregateOutputType | null;
    _max: Operations_staffMaxAggregateOutputType | null;
  };

  type GetOperations_staffGroupByPayload<T extends operations_staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operations_staffGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Operations_staffGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Operations_staffGroupByOutputType[P]>
          : GetScalarType<T[P], Operations_staffGroupByOutputType[P]>;
      }
    >
  >;

  export type operations_staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        staff_name?: boolean;
        staff_role?: boolean;
        dashboard_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        operations_dashboard?: boolean | operations_dashboardDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['operations_staff']
    >;

  export type operations_staffSelectScalar = {
    id?: boolean;
    staff_name?: boolean;
    staff_role?: boolean;
    dashboard_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type operations_staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operations_dashboard?: boolean | operations_dashboardDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $operations_staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'operations_staff';
    objects: {
      operations_dashboard: Prisma.$operations_dashboardPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        staff_name: string;
        staff_role: string;
        dashboard_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['operations_staff']
    >;
    composites: {};
  };

  type operations_staffGetPayload<S extends boolean | null | undefined | operations_staffDefaultArgs> =
    $Result.GetResult<Prisma.$operations_staffPayload, S>;

  type operations_staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    operations_staffFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Operations_staffCountAggregateInputType | true;
  };

  export interface operations_staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operations_staff']; meta: { name: 'operations_staff' } };
    /**
     * Find zero or one Operations_staff that matches the filter.
     * @param {operations_staffFindUniqueArgs} args - Arguments to find a Operations_staff
     * @example
     * // Get one Operations_staff
     * const operations_staff = await prisma.operations_staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends operations_staffFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, operations_staffFindUniqueArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Operations_staff that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {operations_staffFindUniqueOrThrowArgs} args - Arguments to find a Operations_staff
     * @example
     * // Get one Operations_staff
     * const operations_staff = await prisma.operations_staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends operations_staffFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_staffFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Operations_staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_staffFindFirstArgs} args - Arguments to find a Operations_staff
     * @example
     * // Get one Operations_staff
     * const operations_staff = await prisma.operations_staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends operations_staffFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_staffFindFirstArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Operations_staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_staffFindFirstOrThrowArgs} args - Arguments to find a Operations_staff
     * @example
     * // Get one Operations_staff
     * const operations_staff = await prisma.operations_staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends operations_staffFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_staffFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Operations_staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_staffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations_staffs
     * const operations_staffs = await prisma.operations_staff.findMany()
     *
     * // Get first 10 Operations_staffs
     * const operations_staffs = await prisma.operations_staff.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const operations_staffWithIdOnly = await prisma.operations_staff.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends operations_staffFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_staffFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Operations_staff.
     * @param {operations_staffCreateArgs} args - Arguments to create a Operations_staff.
     * @example
     * // Create one Operations_staff
     * const Operations_staff = await prisma.operations_staff.create({
     *   data: {
     *     // ... data to create a Operations_staff
     *   }
     * })
     *
     **/
    create<T extends operations_staffCreateArgs<ExtArgs>>(
      args: SelectSubset<T, operations_staffCreateArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Operations_staffs.
     *     @param {operations_staffCreateManyArgs} args - Arguments to create many Operations_staffs.
     *     @example
     *     // Create many Operations_staffs
     *     const operations_staff = await prisma.operations_staff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends operations_staffCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_staffCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Operations_staff.
     * @param {operations_staffDeleteArgs} args - Arguments to delete one Operations_staff.
     * @example
     * // Delete one Operations_staff
     * const Operations_staff = await prisma.operations_staff.delete({
     *   where: {
     *     // ... filter to delete one Operations_staff
     *   }
     * })
     *
     **/
    delete<T extends operations_staffDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, operations_staffDeleteArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Operations_staff.
     * @param {operations_staffUpdateArgs} args - Arguments to update one Operations_staff.
     * @example
     * // Update one Operations_staff
     * const operations_staff = await prisma.operations_staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends operations_staffUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, operations_staffUpdateArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Operations_staffs.
     * @param {operations_staffDeleteManyArgs} args - Arguments to filter Operations_staffs to delete.
     * @example
     * // Delete a few Operations_staffs
     * const { count } = await prisma.operations_staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends operations_staffDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_staffDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Operations_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations_staffs
     * const operations_staff = await prisma.operations_staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends operations_staffUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, operations_staffUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Operations_staff.
     * @param {operations_staffUpsertArgs} args - Arguments to update or create a Operations_staff.
     * @example
     * // Update or create a Operations_staff
     * const operations_staff = await prisma.operations_staff.upsert({
     *   create: {
     *     // ... data to create a Operations_staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operations_staff we want to update
     *   }
     * })
     **/
    upsert<T extends operations_staffUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, operations_staffUpsertArgs<ExtArgs>>,
    ): Prisma__operations_staffClient<
      $Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Operations_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_staffCountArgs} args - Arguments to filter Operations_staffs to count.
     * @example
     * // Count the number of Operations_staffs
     * const count = await prisma.operations_staff.count({
     *   where: {
     *     // ... the filter for the Operations_staffs we want to count
     *   }
     * })
     **/
    count<T extends operations_staffCountArgs>(
      args?: Subset<T, operations_staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operations_staffCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Operations_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operations_staffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Operations_staffAggregateArgs>(
      args: Subset<T, Operations_staffAggregateArgs>,
    ): Prisma.PrismaPromise<GetOperations_staffAggregateType<T>>;

    /**
     * Group by Operations_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends operations_staffGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operations_staffGroupByArgs['orderBy'] }
        : { orderBy?: operations_staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, operations_staffGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOperations_staffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the operations_staff model
     */
    readonly fields: operations_staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operations_staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operations_staffClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    operations_dashboard<T extends operations_dashboardDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, operations_dashboardDefaultArgs<ExtArgs>>,
    ): Prisma__operations_dashboardClient<
      $Result.GetResult<Prisma.$operations_dashboardPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the operations_staff model
   */
  interface operations_staffFieldRefs {
    readonly id: FieldRef<'operations_staff', 'String'>;
    readonly staff_name: FieldRef<'operations_staff', 'String'>;
    readonly staff_role: FieldRef<'operations_staff', 'String'>;
    readonly dashboard_id: FieldRef<'operations_staff', 'String'>;
    readonly user_id: FieldRef<'operations_staff', 'String'>;
    readonly created_at: FieldRef<'operations_staff', 'DateTime'>;
    readonly updated_at: FieldRef<'operations_staff', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * operations_staff findUnique
   */
  export type operations_staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * Filter, which operations_staff to fetch.
     */
    where: operations_staffWhereUniqueInput;
  };

  /**
   * operations_staff findUniqueOrThrow
   */
  export type operations_staffFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * Filter, which operations_staff to fetch.
     */
    where: operations_staffWhereUniqueInput;
  };

  /**
   * operations_staff findFirst
   */
  export type operations_staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * Filter, which operations_staff to fetch.
     */
    where?: operations_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_staffs to fetch.
     */
    orderBy?: operations_staffOrderByWithRelationInput | operations_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for operations_staffs.
     */
    cursor?: operations_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of operations_staffs.
     */
    distinct?: Operations_staffScalarFieldEnum | Operations_staffScalarFieldEnum[];
  };

  /**
   * operations_staff findFirstOrThrow
   */
  export type operations_staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the operations_staff
       */
      select?: operations_staffSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: operations_staffInclude<ExtArgs> | null;
      /**
       * Filter, which operations_staff to fetch.
       */
      where?: operations_staffWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of operations_staffs to fetch.
       */
      orderBy?: operations_staffOrderByWithRelationInput | operations_staffOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for operations_staffs.
       */
      cursor?: operations_staffWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` operations_staffs from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` operations_staffs.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of operations_staffs.
       */
      distinct?: Operations_staffScalarFieldEnum | Operations_staffScalarFieldEnum[];
    };

  /**
   * operations_staff findMany
   */
  export type operations_staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * Filter, which operations_staffs to fetch.
     */
    where?: operations_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_staffs to fetch.
     */
    orderBy?: operations_staffOrderByWithRelationInput | operations_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing operations_staffs.
     */
    cursor?: operations_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_staffs.
     */
    skip?: number;
    distinct?: Operations_staffScalarFieldEnum | Operations_staffScalarFieldEnum[];
  };

  /**
   * operations_staff create
   */
  export type operations_staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * The data needed to create a operations_staff.
     */
    data: XOR<operations_staffCreateInput, operations_staffUncheckedCreateInput>;
  };

  /**
   * operations_staff createMany
   */
  export type operations_staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operations_staffs.
     */
    data: operations_staffCreateManyInput | operations_staffCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * operations_staff update
   */
  export type operations_staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * The data needed to update a operations_staff.
     */
    data: XOR<operations_staffUpdateInput, operations_staffUncheckedUpdateInput>;
    /**
     * Choose, which operations_staff to update.
     */
    where: operations_staffWhereUniqueInput;
  };

  /**
   * operations_staff updateMany
   */
  export type operations_staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operations_staffs.
     */
    data: XOR<operations_staffUpdateManyMutationInput, operations_staffUncheckedUpdateManyInput>;
    /**
     * Filter which operations_staffs to update
     */
    where?: operations_staffWhereInput;
  };

  /**
   * operations_staff upsert
   */
  export type operations_staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * The filter to search for the operations_staff to update in case it exists.
     */
    where: operations_staffWhereUniqueInput;
    /**
     * In case the operations_staff found by the `where` argument doesn't exist, create a new operations_staff with this data.
     */
    create: XOR<operations_staffCreateInput, operations_staffUncheckedCreateInput>;
    /**
     * In case the operations_staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operations_staffUpdateInput, operations_staffUncheckedUpdateInput>;
  };

  /**
   * operations_staff delete
   */
  export type operations_staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    /**
     * Filter which operations_staff to delete.
     */
    where: operations_staffWhereUniqueInput;
  };

  /**
   * operations_staff deleteMany
   */
  export type operations_staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operations_staffs to delete
     */
    where?: operations_staffWhereInput;
  };

  /**
   * operations_staff without action
   */
  export type operations_staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | user$bookingArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      operations_staff?: boolean | user$operations_staffArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | user$bookingArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    operations_staff?: boolean | user$operations_staffArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      operations_staff: Prisma.$operations_staffPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends user$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    operations_staff<T extends user$operations_staffArgs<ExtArgs> = {}>(
      args?: Subset<T, user$operations_staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operations_staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.booking
   */
  export type user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.operations_staff
   */
  export type user$operations_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_staff
     */
    select?: operations_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_staffInclude<ExtArgs> | null;
    where?: operations_staffWhereInput;
    orderBy?: operations_staffOrderByWithRelationInput | operations_staffOrderByWithRelationInput[];
    cursor?: operations_staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Operations_staffScalarFieldEnum | Operations_staffScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BookingScalarFieldEnum: {
    id: 'id';
    start_time: 'start_time';
    end_time: 'end_time';
    pickup_location: 'pickup_location';
    dropoff_location: 'dropoff_location';
    user_id: 'user_id';
    car_id: 'car_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const CarScalarFieldEnum: {
    id: 'id';
    make: 'make';
    model: 'model';
    year: 'year';
    color: 'color';
    license_plate: 'license_plate';
    mileage: 'mileage';
    status: 'status';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    country: 'country';
    postal_code: 'postal_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Operations_dashboardScalarFieldEnum: {
    id: 'id';
    dashboard_name: 'dashboard_name';
    dashboard_description: 'dashboard_description';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Operations_dashboardScalarFieldEnum =
    (typeof Operations_dashboardScalarFieldEnum)[keyof typeof Operations_dashboardScalarFieldEnum];

  export const Operations_staffScalarFieldEnum: {
    id: 'id';
    staff_name: 'staff_name';
    staff_role: 'staff_role';
    dashboard_id: 'dashboard_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Operations_staffScalarFieldEnum =
    (typeof Operations_staffScalarFieldEnum)[keyof typeof Operations_staffScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[];
    OR?: bookingWhereInput[];
    NOT?: bookingWhereInput | bookingWhereInput[];
    id?: UuidFilter<'booking'> | string;
    start_time?: DateTimeFilter<'booking'> | Date | string;
    end_time?: DateTimeFilter<'booking'> | Date | string;
    pickup_location?: StringFilter<'booking'> | string;
    dropoff_location?: StringFilter<'booking'> | string;
    user_id?: UuidFilter<'booking'> | string;
    car_id?: UuidFilter<'booking'> | string;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
    car?: XOR<CarRelationFilter, carWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    car?: carOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type bookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bookingWhereInput | bookingWhereInput[];
      OR?: bookingWhereInput[];
      NOT?: bookingWhereInput | bookingWhereInput[];
      start_time?: DateTimeFilter<'booking'> | Date | string;
      end_time?: DateTimeFilter<'booking'> | Date | string;
      pickup_location?: StringFilter<'booking'> | string;
      dropoff_location?: StringFilter<'booking'> | string;
      user_id?: UuidFilter<'booking'> | string;
      car_id?: UuidFilter<'booking'> | string;
      created_at?: DateTimeFilter<'booking'> | Date | string;
      updated_at?: DateTimeFilter<'booking'> | Date | string;
      car?: XOR<CarRelationFilter, carWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bookingCountOrderByAggregateInput;
    _max?: bookingMaxOrderByAggregateInput;
    _min?: bookingMinOrderByAggregateInput;
  };

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    OR?: bookingScalarWhereWithAggregatesInput[];
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'booking'> | string;
    start_time?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    end_time?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    pickup_location?: StringWithAggregatesFilter<'booking'> | string;
    dropoff_location?: StringWithAggregatesFilter<'booking'> | string;
    user_id?: UuidWithAggregatesFilter<'booking'> | string;
    car_id?: UuidWithAggregatesFilter<'booking'> | string;
    created_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
  };

  export type carWhereInput = {
    AND?: carWhereInput | carWhereInput[];
    OR?: carWhereInput[];
    NOT?: carWhereInput | carWhereInput[];
    id?: UuidFilter<'car'> | string;
    make?: StringFilter<'car'> | string;
    model?: StringFilter<'car'> | string;
    year?: IntFilter<'car'> | number;
    color?: StringFilter<'car'> | string;
    license_plate?: StringFilter<'car'> | string;
    mileage?: IntFilter<'car'> | number;
    status?: StringFilter<'car'> | string;
    company_id?: UuidFilter<'car'> | string;
    created_at?: DateTimeFilter<'car'> | Date | string;
    updated_at?: DateTimeFilter<'car'> | Date | string;
    booking?: BookingListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
  };

  export type carOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    mileage?: SortOrder;
    status?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type carWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: carWhereInput | carWhereInput[];
      OR?: carWhereInput[];
      NOT?: carWhereInput | carWhereInput[];
      make?: StringFilter<'car'> | string;
      model?: StringFilter<'car'> | string;
      year?: IntFilter<'car'> | number;
      color?: StringFilter<'car'> | string;
      license_plate?: StringFilter<'car'> | string;
      mileage?: IntFilter<'car'> | number;
      status?: StringFilter<'car'> | string;
      company_id?: UuidFilter<'car'> | string;
      created_at?: DateTimeFilter<'car'> | Date | string;
      updated_at?: DateTimeFilter<'car'> | Date | string;
      booking?: BookingListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
    },
    'id'
  >;

  export type carOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    mileage?: SortOrder;
    status?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: carCountOrderByAggregateInput;
    _avg?: carAvgOrderByAggregateInput;
    _max?: carMaxOrderByAggregateInput;
    _min?: carMinOrderByAggregateInput;
    _sum?: carSumOrderByAggregateInput;
  };

  export type carScalarWhereWithAggregatesInput = {
    AND?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[];
    OR?: carScalarWhereWithAggregatesInput[];
    NOT?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'car'> | string;
    make?: StringWithAggregatesFilter<'car'> | string;
    model?: StringWithAggregatesFilter<'car'> | string;
    year?: IntWithAggregatesFilter<'car'> | number;
    color?: StringWithAggregatesFilter<'car'> | string;
    license_plate?: StringWithAggregatesFilter<'car'> | string;
    mileage?: IntWithAggregatesFilter<'car'> | number;
    status?: StringWithAggregatesFilter<'car'> | string;
    company_id?: UuidWithAggregatesFilter<'car'> | string;
    created_at?: DateTimeWithAggregatesFilter<'car'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'car'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    country?: StringNullableFilter<'company'> | string | null;
    postal_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    car?: CarListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    operations_dashboard?: Operations_dashboardListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    postal_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    car?: carOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    operations_dashboard?: operations_dashboardOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      country?: StringNullableFilter<'company'> | string | null;
      postal_code?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      car?: CarListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      operations_dashboard?: Operations_dashboardListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    postal_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    country?: StringNullableWithAggregatesFilter<'company'> | string | null;
    postal_code?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type operations_dashboardWhereInput = {
    AND?: operations_dashboardWhereInput | operations_dashboardWhereInput[];
    OR?: operations_dashboardWhereInput[];
    NOT?: operations_dashboardWhereInput | operations_dashboardWhereInput[];
    id?: UuidFilter<'operations_dashboard'> | string;
    dashboard_name?: StringFilter<'operations_dashboard'> | string;
    dashboard_description?: StringNullableFilter<'operations_dashboard'> | string | null;
    company_id?: UuidFilter<'operations_dashboard'> | string;
    created_at?: DateTimeFilter<'operations_dashboard'> | Date | string;
    updated_at?: DateTimeFilter<'operations_dashboard'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    operations_staff?: Operations_staffListRelationFilter;
  };

  export type operations_dashboardOrderByWithRelationInput = {
    id?: SortOrder;
    dashboard_name?: SortOrder;
    dashboard_description?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    operations_staff?: operations_staffOrderByRelationAggregateInput;
  };

  export type operations_dashboardWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: operations_dashboardWhereInput | operations_dashboardWhereInput[];
      OR?: operations_dashboardWhereInput[];
      NOT?: operations_dashboardWhereInput | operations_dashboardWhereInput[];
      dashboard_name?: StringFilter<'operations_dashboard'> | string;
      dashboard_description?: StringNullableFilter<'operations_dashboard'> | string | null;
      company_id?: UuidFilter<'operations_dashboard'> | string;
      created_at?: DateTimeFilter<'operations_dashboard'> | Date | string;
      updated_at?: DateTimeFilter<'operations_dashboard'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      operations_staff?: Operations_staffListRelationFilter;
    },
    'id'
  >;

  export type operations_dashboardOrderByWithAggregationInput = {
    id?: SortOrder;
    dashboard_name?: SortOrder;
    dashboard_description?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: operations_dashboardCountOrderByAggregateInput;
    _max?: operations_dashboardMaxOrderByAggregateInput;
    _min?: operations_dashboardMinOrderByAggregateInput;
  };

  export type operations_dashboardScalarWhereWithAggregatesInput = {
    AND?: operations_dashboardScalarWhereWithAggregatesInput | operations_dashboardScalarWhereWithAggregatesInput[];
    OR?: operations_dashboardScalarWhereWithAggregatesInput[];
    NOT?: operations_dashboardScalarWhereWithAggregatesInput | operations_dashboardScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'operations_dashboard'> | string;
    dashboard_name?: StringWithAggregatesFilter<'operations_dashboard'> | string;
    dashboard_description?: StringNullableWithAggregatesFilter<'operations_dashboard'> | string | null;
    company_id?: UuidWithAggregatesFilter<'operations_dashboard'> | string;
    created_at?: DateTimeWithAggregatesFilter<'operations_dashboard'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'operations_dashboard'> | Date | string;
  };

  export type operations_staffWhereInput = {
    AND?: operations_staffWhereInput | operations_staffWhereInput[];
    OR?: operations_staffWhereInput[];
    NOT?: operations_staffWhereInput | operations_staffWhereInput[];
    id?: UuidFilter<'operations_staff'> | string;
    staff_name?: StringFilter<'operations_staff'> | string;
    staff_role?: StringFilter<'operations_staff'> | string;
    dashboard_id?: UuidFilter<'operations_staff'> | string;
    user_id?: UuidFilter<'operations_staff'> | string;
    created_at?: DateTimeFilter<'operations_staff'> | Date | string;
    updated_at?: DateTimeFilter<'operations_staff'> | Date | string;
    operations_dashboard?: XOR<Operations_dashboardRelationFilter, operations_dashboardWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type operations_staffOrderByWithRelationInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    staff_role?: SortOrder;
    dashboard_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    operations_dashboard?: operations_dashboardOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type operations_staffWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: operations_staffWhereInput | operations_staffWhereInput[];
      OR?: operations_staffWhereInput[];
      NOT?: operations_staffWhereInput | operations_staffWhereInput[];
      staff_name?: StringFilter<'operations_staff'> | string;
      staff_role?: StringFilter<'operations_staff'> | string;
      dashboard_id?: UuidFilter<'operations_staff'> | string;
      user_id?: UuidFilter<'operations_staff'> | string;
      created_at?: DateTimeFilter<'operations_staff'> | Date | string;
      updated_at?: DateTimeFilter<'operations_staff'> | Date | string;
      operations_dashboard?: XOR<Operations_dashboardRelationFilter, operations_dashboardWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type operations_staffOrderByWithAggregationInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    staff_role?: SortOrder;
    dashboard_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: operations_staffCountOrderByAggregateInput;
    _max?: operations_staffMaxOrderByAggregateInput;
    _min?: operations_staffMinOrderByAggregateInput;
  };

  export type operations_staffScalarWhereWithAggregatesInput = {
    AND?: operations_staffScalarWhereWithAggregatesInput | operations_staffScalarWhereWithAggregatesInput[];
    OR?: operations_staffScalarWhereWithAggregatesInput[];
    NOT?: operations_staffScalarWhereWithAggregatesInput | operations_staffScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'operations_staff'> | string;
    staff_name?: StringWithAggregatesFilter<'operations_staff'> | string;
    staff_role?: StringWithAggregatesFilter<'operations_staff'> | string;
    dashboard_id?: UuidWithAggregatesFilter<'operations_staff'> | string;
    user_id?: UuidWithAggregatesFilter<'operations_staff'> | string;
    created_at?: DateTimeWithAggregatesFilter<'operations_staff'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'operations_staff'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    booking?: BookingListRelationFilter;
    company?: CompanyListRelationFilter;
    operations_staff?: Operations_staffListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    operations_staff?: operations_staffOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      booking?: BookingListRelationFilter;
      company?: CompanyListRelationFilter;
      operations_staff?: Operations_staffListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type bookingCreateInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutBookingInput;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    user_id: string;
    car_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutBookingNestedInput;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    user_id: string;
    car_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutCarInput;
    company: companyCreateNestedOneWithoutCarInput;
  };

  export type carUncheckedCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutCarNestedInput;
    company?: companyUpdateOneRequiredWithoutCarNestedInput;
  };

  export type carUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type carCreateManyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    car?: carCreateNestedManyWithoutCompanyInput;
    user: userCreateNestedOneWithoutCompanyInput;
    operations_dashboard?: operations_dashboardCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    car?: carUncheckedCreateNestedManyWithoutCompanyInput;
    operations_dashboard?: operations_dashboardUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    operations_dashboard?: operations_dashboardUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUncheckedUpdateManyWithoutCompanyNestedInput;
    operations_dashboard?: operations_dashboardUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type operations_dashboardCreateInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOperations_dashboardInput;
    operations_staff?: operations_staffCreateNestedManyWithoutOperations_dashboardInput;
  };

  export type operations_dashboardUncheckedCreateInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operations_staff?: operations_staffUncheckedCreateNestedManyWithoutOperations_dashboardInput;
  };

  export type operations_dashboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOperations_dashboardNestedInput;
    operations_staff?: operations_staffUpdateManyWithoutOperations_dashboardNestedInput;
  };

  export type operations_dashboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operations_staff?: operations_staffUncheckedUpdateManyWithoutOperations_dashboardNestedInput;
  };

  export type operations_dashboardCreateManyInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_dashboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_dashboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_staffCreateInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operations_dashboard: operations_dashboardCreateNestedOneWithoutOperations_staffInput;
    user: userCreateNestedOneWithoutOperations_staffInput;
  };

  export type operations_staffUncheckedCreateInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    dashboard_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_staffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operations_dashboard?: operations_dashboardUpdateOneRequiredWithoutOperations_staffNestedInput;
    user?: userUpdateOneRequiredWithoutOperations_staffNestedInput;
  };

  export type operations_staffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    dashboard_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_staffCreateManyInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    dashboard_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_staffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_staffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    dashboard_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    operations_staff?: operations_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    operations_staff?: operations_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    operations_staff?: operations_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    operations_staff?: operations_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type CarRelationFilter = {
    is?: carWhereInput;
    isNot?: carWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type BookingListRelationFilter = {
    every?: bookingWhereInput;
    some?: bookingWhereInput;
    none?: bookingWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type carCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    mileage?: SortOrder;
    status?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carAvgOrderByAggregateInput = {
    year?: SortOrder;
    mileage?: SortOrder;
  };

  export type carMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    mileage?: SortOrder;
    status?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    mileage?: SortOrder;
    status?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carSumOrderByAggregateInput = {
    year?: SortOrder;
    mileage?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type CarListRelationFilter = {
    every?: carWhereInput;
    some?: carWhereInput;
    none?: carWhereInput;
  };

  export type Operations_dashboardListRelationFilter = {
    every?: operations_dashboardWhereInput;
    some?: operations_dashboardWhereInput;
    none?: operations_dashboardWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type carOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type operations_dashboardOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    postal_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    postal_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    country?: SortOrder;
    postal_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type Operations_staffListRelationFilter = {
    every?: operations_staffWhereInput;
    some?: operations_staffWhereInput;
    none?: operations_staffWhereInput;
  };

  export type operations_staffOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type operations_dashboardCountOrderByAggregateInput = {
    id?: SortOrder;
    dashboard_name?: SortOrder;
    dashboard_description?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type operations_dashboardMaxOrderByAggregateInput = {
    id?: SortOrder;
    dashboard_name?: SortOrder;
    dashboard_description?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type operations_dashboardMinOrderByAggregateInput = {
    id?: SortOrder;
    dashboard_name?: SortOrder;
    dashboard_description?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Operations_dashboardRelationFilter = {
    is?: operations_dashboardWhereInput;
    isNot?: operations_dashboardWhereInput;
  };

  export type operations_staffCountOrderByAggregateInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    staff_role?: SortOrder;
    dashboard_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type operations_staffMaxOrderByAggregateInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    staff_role?: SortOrder;
    dashboard_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type operations_staffMinOrderByAggregateInput = {
    id?: SortOrder;
    staff_name?: SortOrder;
    staff_role?: SortOrder;
    dashboard_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carCreateNestedOneWithoutBookingInput = {
    create?: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: carCreateOrConnectWithoutBookingInput;
    connect?: carWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type carUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: carCreateOrConnectWithoutBookingInput;
    upsert?: carUpsertWithoutBookingInput;
    connect?: carWhereUniqueInput;
    update?: XOR<
      XOR<carUpdateToOneWithWhereWithoutBookingInput, carUpdateWithoutBookingInput>,
      carUncheckedUpdateWithoutBookingInput
    >;
  };

  export type userUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    upsert?: userUpsertWithoutBookingInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBookingInput, userUpdateWithoutBookingInput>,
      userUncheckedUpdateWithoutBookingInput
    >;
  };

  export type bookingCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutCarInput = {
    create?: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCarInput;
    connect?: companyWhereUniqueInput;
  };

  export type bookingUncheckedCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type bookingUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutCarInput | bookingUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutCarInput | bookingUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutCarInput | bookingUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCarInput;
    upsert?: companyUpsertWithoutCarInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutCarInput, companyUpdateWithoutCarInput>,
      companyUncheckedUpdateWithoutCarInput
    >;
  };

  export type bookingUncheckedUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutCarInput | bookingUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutCarInput | bookingUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutCarInput | bookingUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type carCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type operations_dashboardCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<operations_dashboardCreateWithoutCompanyInput, operations_dashboardUncheckedCreateWithoutCompanyInput>
      | operations_dashboardCreateWithoutCompanyInput[]
      | operations_dashboardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | operations_dashboardCreateOrConnectWithoutCompanyInput
      | operations_dashboardCreateOrConnectWithoutCompanyInput[];
    createMany?: operations_dashboardCreateManyCompanyInputEnvelope;
    connect?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
  };

  export type carUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
  };

  export type operations_dashboardUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<operations_dashboardCreateWithoutCompanyInput, operations_dashboardUncheckedCreateWithoutCompanyInput>
      | operations_dashboardCreateWithoutCompanyInput[]
      | operations_dashboardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | operations_dashboardCreateOrConnectWithoutCompanyInput
      | operations_dashboardCreateOrConnectWithoutCompanyInput[];
    createMany?: operations_dashboardCreateManyCompanyInputEnvelope;
    connect?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type carUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    upsert?: carUpsertWithWhereUniqueWithoutCompanyInput | carUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    set?: carWhereUniqueInput | carWhereUniqueInput[];
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[];
    delete?: carWhereUniqueInput | carWhereUniqueInput[];
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
    update?: carUpdateWithWhereUniqueWithoutCompanyInput | carUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: carUpdateManyWithWhereWithoutCompanyInput | carUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: carScalarWhereInput | carScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type operations_dashboardUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<operations_dashboardCreateWithoutCompanyInput, operations_dashboardUncheckedCreateWithoutCompanyInput>
      | operations_dashboardCreateWithoutCompanyInput[]
      | operations_dashboardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | operations_dashboardCreateOrConnectWithoutCompanyInput
      | operations_dashboardCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | operations_dashboardUpsertWithWhereUniqueWithoutCompanyInput
      | operations_dashboardUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: operations_dashboardCreateManyCompanyInputEnvelope;
    set?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    disconnect?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    delete?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    connect?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    update?:
      | operations_dashboardUpdateWithWhereUniqueWithoutCompanyInput
      | operations_dashboardUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | operations_dashboardUpdateManyWithWhereWithoutCompanyInput
      | operations_dashboardUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: operations_dashboardScalarWhereInput | operations_dashboardScalarWhereInput[];
  };

  export type carUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    upsert?: carUpsertWithWhereUniqueWithoutCompanyInput | carUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    set?: carWhereUniqueInput | carWhereUniqueInput[];
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[];
    delete?: carWhereUniqueInput | carWhereUniqueInput[];
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
    update?: carUpdateWithWhereUniqueWithoutCompanyInput | carUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: carUpdateManyWithWhereWithoutCompanyInput | carUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: carScalarWhereInput | carScalarWhereInput[];
  };

  export type operations_dashboardUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<operations_dashboardCreateWithoutCompanyInput, operations_dashboardUncheckedCreateWithoutCompanyInput>
      | operations_dashboardCreateWithoutCompanyInput[]
      | operations_dashboardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | operations_dashboardCreateOrConnectWithoutCompanyInput
      | operations_dashboardCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | operations_dashboardUpsertWithWhereUniqueWithoutCompanyInput
      | operations_dashboardUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: operations_dashboardCreateManyCompanyInputEnvelope;
    set?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    disconnect?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    delete?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    connect?: operations_dashboardWhereUniqueInput | operations_dashboardWhereUniqueInput[];
    update?:
      | operations_dashboardUpdateWithWhereUniqueWithoutCompanyInput
      | operations_dashboardUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | operations_dashboardUpdateManyWithWhereWithoutCompanyInput
      | operations_dashboardUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: operations_dashboardScalarWhereInput | operations_dashboardScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutOperations_dashboardInput = {
    create?: XOR<companyCreateWithoutOperations_dashboardInput, companyUncheckedCreateWithoutOperations_dashboardInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOperations_dashboardInput;
    connect?: companyWhereUniqueInput;
  };

  export type operations_staffCreateNestedManyWithoutOperations_dashboardInput = {
    create?:
      | XOR<
          operations_staffCreateWithoutOperations_dashboardInput,
          operations_staffUncheckedCreateWithoutOperations_dashboardInput
        >
      | operations_staffCreateWithoutOperations_dashboardInput[]
      | operations_staffUncheckedCreateWithoutOperations_dashboardInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput[];
    createMany?: operations_staffCreateManyOperations_dashboardInputEnvelope;
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
  };

  export type operations_staffUncheckedCreateNestedManyWithoutOperations_dashboardInput = {
    create?:
      | XOR<
          operations_staffCreateWithoutOperations_dashboardInput,
          operations_staffUncheckedCreateWithoutOperations_dashboardInput
        >
      | operations_staffCreateWithoutOperations_dashboardInput[]
      | operations_staffUncheckedCreateWithoutOperations_dashboardInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput[];
    createMany?: operations_staffCreateManyOperations_dashboardInputEnvelope;
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
  };

  export type companyUpdateOneRequiredWithoutOperations_dashboardNestedInput = {
    create?: XOR<companyCreateWithoutOperations_dashboardInput, companyUncheckedCreateWithoutOperations_dashboardInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOperations_dashboardInput;
    upsert?: companyUpsertWithoutOperations_dashboardInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutOperations_dashboardInput, companyUpdateWithoutOperations_dashboardInput>,
      companyUncheckedUpdateWithoutOperations_dashboardInput
    >;
  };

  export type operations_staffUpdateManyWithoutOperations_dashboardNestedInput = {
    create?:
      | XOR<
          operations_staffCreateWithoutOperations_dashboardInput,
          operations_staffUncheckedCreateWithoutOperations_dashboardInput
        >
      | operations_staffCreateWithoutOperations_dashboardInput[]
      | operations_staffUncheckedCreateWithoutOperations_dashboardInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput[];
    upsert?:
      | operations_staffUpsertWithWhereUniqueWithoutOperations_dashboardInput
      | operations_staffUpsertWithWhereUniqueWithoutOperations_dashboardInput[];
    createMany?: operations_staffCreateManyOperations_dashboardInputEnvelope;
    set?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    disconnect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    delete?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    update?:
      | operations_staffUpdateWithWhereUniqueWithoutOperations_dashboardInput
      | operations_staffUpdateWithWhereUniqueWithoutOperations_dashboardInput[];
    updateMany?:
      | operations_staffUpdateManyWithWhereWithoutOperations_dashboardInput
      | operations_staffUpdateManyWithWhereWithoutOperations_dashboardInput[];
    deleteMany?: operations_staffScalarWhereInput | operations_staffScalarWhereInput[];
  };

  export type operations_staffUncheckedUpdateManyWithoutOperations_dashboardNestedInput = {
    create?:
      | XOR<
          operations_staffCreateWithoutOperations_dashboardInput,
          operations_staffUncheckedCreateWithoutOperations_dashboardInput
        >
      | operations_staffCreateWithoutOperations_dashboardInput[]
      | operations_staffUncheckedCreateWithoutOperations_dashboardInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput
      | operations_staffCreateOrConnectWithoutOperations_dashboardInput[];
    upsert?:
      | operations_staffUpsertWithWhereUniqueWithoutOperations_dashboardInput
      | operations_staffUpsertWithWhereUniqueWithoutOperations_dashboardInput[];
    createMany?: operations_staffCreateManyOperations_dashboardInputEnvelope;
    set?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    disconnect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    delete?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    update?:
      | operations_staffUpdateWithWhereUniqueWithoutOperations_dashboardInput
      | operations_staffUpdateWithWhereUniqueWithoutOperations_dashboardInput[];
    updateMany?:
      | operations_staffUpdateManyWithWhereWithoutOperations_dashboardInput
      | operations_staffUpdateManyWithWhereWithoutOperations_dashboardInput[];
    deleteMany?: operations_staffScalarWhereInput | operations_staffScalarWhereInput[];
  };

  export type operations_dashboardCreateNestedOneWithoutOperations_staffInput = {
    create?: XOR<
      operations_dashboardCreateWithoutOperations_staffInput,
      operations_dashboardUncheckedCreateWithoutOperations_staffInput
    >;
    connectOrCreate?: operations_dashboardCreateOrConnectWithoutOperations_staffInput;
    connect?: operations_dashboardWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutOperations_staffInput = {
    create?: XOR<userCreateWithoutOperations_staffInput, userUncheckedCreateWithoutOperations_staffInput>;
    connectOrCreate?: userCreateOrConnectWithoutOperations_staffInput;
    connect?: userWhereUniqueInput;
  };

  export type operations_dashboardUpdateOneRequiredWithoutOperations_staffNestedInput = {
    create?: XOR<
      operations_dashboardCreateWithoutOperations_staffInput,
      operations_dashboardUncheckedCreateWithoutOperations_staffInput
    >;
    connectOrCreate?: operations_dashboardCreateOrConnectWithoutOperations_staffInput;
    upsert?: operations_dashboardUpsertWithoutOperations_staffInput;
    connect?: operations_dashboardWhereUniqueInput;
    update?: XOR<
      XOR<
        operations_dashboardUpdateToOneWithWhereWithoutOperations_staffInput,
        operations_dashboardUpdateWithoutOperations_staffInput
      >,
      operations_dashboardUncheckedUpdateWithoutOperations_staffInput
    >;
  };

  export type userUpdateOneRequiredWithoutOperations_staffNestedInput = {
    create?: XOR<userCreateWithoutOperations_staffInput, userUncheckedCreateWithoutOperations_staffInput>;
    connectOrCreate?: userCreateOrConnectWithoutOperations_staffInput;
    upsert?: userUpsertWithoutOperations_staffInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOperations_staffInput, userUpdateWithoutOperations_staffInput>,
      userUncheckedUpdateWithoutOperations_staffInput
    >;
  };

  export type bookingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type operations_staffCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<operations_staffCreateWithoutUserInput, operations_staffUncheckedCreateWithoutUserInput>
      | operations_staffCreateWithoutUserInput[]
      | operations_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutUserInput
      | operations_staffCreateOrConnectWithoutUserInput[];
    createMany?: operations_staffCreateManyUserInputEnvelope;
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type operations_staffUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<operations_staffCreateWithoutUserInput, operations_staffUncheckedCreateWithoutUserInput>
      | operations_staffCreateWithoutUserInput[]
      | operations_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutUserInput
      | operations_staffCreateOrConnectWithoutUserInput[];
    createMany?: operations_staffCreateManyUserInputEnvelope;
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type operations_staffUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<operations_staffCreateWithoutUserInput, operations_staffUncheckedCreateWithoutUserInput>
      | operations_staffCreateWithoutUserInput[]
      | operations_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutUserInput
      | operations_staffCreateOrConnectWithoutUserInput[];
    upsert?:
      | operations_staffUpsertWithWhereUniqueWithoutUserInput
      | operations_staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: operations_staffCreateManyUserInputEnvelope;
    set?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    disconnect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    delete?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    update?:
      | operations_staffUpdateWithWhereUniqueWithoutUserInput
      | operations_staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | operations_staffUpdateManyWithWhereWithoutUserInput
      | operations_staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: operations_staffScalarWhereInput | operations_staffScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type operations_staffUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<operations_staffCreateWithoutUserInput, operations_staffUncheckedCreateWithoutUserInput>
      | operations_staffCreateWithoutUserInput[]
      | operations_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_staffCreateOrConnectWithoutUserInput
      | operations_staffCreateOrConnectWithoutUserInput[];
    upsert?:
      | operations_staffUpsertWithWhereUniqueWithoutUserInput
      | operations_staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: operations_staffCreateManyUserInputEnvelope;
    set?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    disconnect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    delete?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    connect?: operations_staffWhereUniqueInput | operations_staffWhereUniqueInput[];
    update?:
      | operations_staffUpdateWithWhereUniqueWithoutUserInput
      | operations_staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | operations_staffUpdateManyWithWhereWithoutUserInput
      | operations_staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: operations_staffScalarWhereInput | operations_staffScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type carCreateWithoutBookingInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutCarInput;
  };

  export type carUncheckedCreateWithoutBookingInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carCreateOrConnectWithoutBookingInput = {
    where: carWhereUniqueInput;
    create: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
  };

  export type userCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    operations_staff?: operations_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    operations_staff?: operations_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
  };

  export type carUpsertWithoutBookingInput = {
    update: XOR<carUpdateWithoutBookingInput, carUncheckedUpdateWithoutBookingInput>;
    create: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
    where?: carWhereInput;
  };

  export type carUpdateToOneWithWhereWithoutBookingInput = {
    where?: carWhereInput;
    data: XOR<carUpdateWithoutBookingInput, carUncheckedUpdateWithoutBookingInput>;
  };

  export type carUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutCarNestedInput;
  };

  export type carUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBookingInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
  };

  export type userUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    operations_staff?: operations_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    operations_staff?: operations_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookingCreateWithoutCarInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutCarInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutCarInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>;
  };

  export type bookingCreateManyCarInputEnvelope = {
    data: bookingCreateManyCarInput | bookingCreateManyCarInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutCarInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    operations_dashboard?: operations_dashboardCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutCarInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    operations_dashboard?: operations_dashboardUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutCarInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
  };

  export type bookingUpsertWithWhereUniqueWithoutCarInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutCarInput, bookingUncheckedUpdateWithoutCarInput>;
    create: XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutCarInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutCarInput, bookingUncheckedUpdateWithoutCarInput>;
  };

  export type bookingUpdateManyWithWhereWithoutCarInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutCarInput>;
  };

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[];
    OR?: bookingScalarWhereInput[];
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[];
    id?: UuidFilter<'booking'> | string;
    start_time?: DateTimeFilter<'booking'> | Date | string;
    end_time?: DateTimeFilter<'booking'> | Date | string;
    pickup_location?: StringFilter<'booking'> | string;
    dropoff_location?: StringFilter<'booking'> | string;
    user_id?: UuidFilter<'booking'> | string;
    car_id?: UuidFilter<'booking'> | string;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
  };

  export type companyUpsertWithoutCarInput = {
    update: XOR<companyUpdateWithoutCarInput, companyUncheckedUpdateWithoutCarInput>;
    create: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutCarInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutCarInput, companyUncheckedUpdateWithoutCarInput>;
  };

  export type companyUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    operations_dashboard?: operations_dashboardUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    operations_dashboard?: operations_dashboardUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type carCreateWithoutCompanyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutCarInput;
  };

  export type carUncheckedCreateWithoutCompanyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carCreateOrConnectWithoutCompanyInput = {
    where: carWhereUniqueInput;
    create: XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>;
  };

  export type carCreateManyCompanyInputEnvelope = {
    data: carCreateManyCompanyInput | carCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    operations_staff?: operations_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    operations_staff?: operations_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type operations_dashboardCreateWithoutCompanyInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    operations_staff?: operations_staffCreateNestedManyWithoutOperations_dashboardInput;
  };

  export type operations_dashboardUncheckedCreateWithoutCompanyInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    operations_staff?: operations_staffUncheckedCreateNestedManyWithoutOperations_dashboardInput;
  };

  export type operations_dashboardCreateOrConnectWithoutCompanyInput = {
    where: operations_dashboardWhereUniqueInput;
    create: XOR<operations_dashboardCreateWithoutCompanyInput, operations_dashboardUncheckedCreateWithoutCompanyInput>;
  };

  export type operations_dashboardCreateManyCompanyInputEnvelope = {
    data: operations_dashboardCreateManyCompanyInput | operations_dashboardCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type carUpsertWithWhereUniqueWithoutCompanyInput = {
    where: carWhereUniqueInput;
    update: XOR<carUpdateWithoutCompanyInput, carUncheckedUpdateWithoutCompanyInput>;
    create: XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>;
  };

  export type carUpdateWithWhereUniqueWithoutCompanyInput = {
    where: carWhereUniqueInput;
    data: XOR<carUpdateWithoutCompanyInput, carUncheckedUpdateWithoutCompanyInput>;
  };

  export type carUpdateManyWithWhereWithoutCompanyInput = {
    where: carScalarWhereInput;
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type carScalarWhereInput = {
    AND?: carScalarWhereInput | carScalarWhereInput[];
    OR?: carScalarWhereInput[];
    NOT?: carScalarWhereInput | carScalarWhereInput[];
    id?: UuidFilter<'car'> | string;
    make?: StringFilter<'car'> | string;
    model?: StringFilter<'car'> | string;
    year?: IntFilter<'car'> | number;
    color?: StringFilter<'car'> | string;
    license_plate?: StringFilter<'car'> | string;
    mileage?: IntFilter<'car'> | number;
    status?: StringFilter<'car'> | string;
    company_id?: UuidFilter<'car'> | string;
    created_at?: DateTimeFilter<'car'> | Date | string;
    updated_at?: DateTimeFilter<'car'> | Date | string;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    operations_staff?: operations_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    operations_staff?: operations_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type operations_dashboardUpsertWithWhereUniqueWithoutCompanyInput = {
    where: operations_dashboardWhereUniqueInput;
    update: XOR<operations_dashboardUpdateWithoutCompanyInput, operations_dashboardUncheckedUpdateWithoutCompanyInput>;
    create: XOR<operations_dashboardCreateWithoutCompanyInput, operations_dashboardUncheckedCreateWithoutCompanyInput>;
  };

  export type operations_dashboardUpdateWithWhereUniqueWithoutCompanyInput = {
    where: operations_dashboardWhereUniqueInput;
    data: XOR<operations_dashboardUpdateWithoutCompanyInput, operations_dashboardUncheckedUpdateWithoutCompanyInput>;
  };

  export type operations_dashboardUpdateManyWithWhereWithoutCompanyInput = {
    where: operations_dashboardScalarWhereInput;
    data: XOR<operations_dashboardUpdateManyMutationInput, operations_dashboardUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type operations_dashboardScalarWhereInput = {
    AND?: operations_dashboardScalarWhereInput | operations_dashboardScalarWhereInput[];
    OR?: operations_dashboardScalarWhereInput[];
    NOT?: operations_dashboardScalarWhereInput | operations_dashboardScalarWhereInput[];
    id?: UuidFilter<'operations_dashboard'> | string;
    dashboard_name?: StringFilter<'operations_dashboard'> | string;
    dashboard_description?: StringNullableFilter<'operations_dashboard'> | string | null;
    company_id?: UuidFilter<'operations_dashboard'> | string;
    created_at?: DateTimeFilter<'operations_dashboard'> | Date | string;
    updated_at?: DateTimeFilter<'operations_dashboard'> | Date | string;
  };

  export type companyCreateWithoutOperations_dashboardInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    car?: carCreateNestedManyWithoutCompanyInput;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutOperations_dashboardInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    car?: carUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutOperations_dashboardInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutOperations_dashboardInput, companyUncheckedCreateWithoutOperations_dashboardInput>;
  };

  export type operations_staffCreateWithoutOperations_dashboardInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOperations_staffInput;
  };

  export type operations_staffUncheckedCreateWithoutOperations_dashboardInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_staffCreateOrConnectWithoutOperations_dashboardInput = {
    where: operations_staffWhereUniqueInput;
    create: XOR<
      operations_staffCreateWithoutOperations_dashboardInput,
      operations_staffUncheckedCreateWithoutOperations_dashboardInput
    >;
  };

  export type operations_staffCreateManyOperations_dashboardInputEnvelope = {
    data: operations_staffCreateManyOperations_dashboardInput | operations_staffCreateManyOperations_dashboardInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutOperations_dashboardInput = {
    update: XOR<companyUpdateWithoutOperations_dashboardInput, companyUncheckedUpdateWithoutOperations_dashboardInput>;
    create: XOR<companyCreateWithoutOperations_dashboardInput, companyUncheckedCreateWithoutOperations_dashboardInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutOperations_dashboardInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutOperations_dashboardInput, companyUncheckedUpdateWithoutOperations_dashboardInput>;
  };

  export type companyUpdateWithoutOperations_dashboardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutOperations_dashboardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type operations_staffUpsertWithWhereUniqueWithoutOperations_dashboardInput = {
    where: operations_staffWhereUniqueInput;
    update: XOR<
      operations_staffUpdateWithoutOperations_dashboardInput,
      operations_staffUncheckedUpdateWithoutOperations_dashboardInput
    >;
    create: XOR<
      operations_staffCreateWithoutOperations_dashboardInput,
      operations_staffUncheckedCreateWithoutOperations_dashboardInput
    >;
  };

  export type operations_staffUpdateWithWhereUniqueWithoutOperations_dashboardInput = {
    where: operations_staffWhereUniqueInput;
    data: XOR<
      operations_staffUpdateWithoutOperations_dashboardInput,
      operations_staffUncheckedUpdateWithoutOperations_dashboardInput
    >;
  };

  export type operations_staffUpdateManyWithWhereWithoutOperations_dashboardInput = {
    where: operations_staffScalarWhereInput;
    data: XOR<
      operations_staffUpdateManyMutationInput,
      operations_staffUncheckedUpdateManyWithoutOperations_dashboardInput
    >;
  };

  export type operations_staffScalarWhereInput = {
    AND?: operations_staffScalarWhereInput | operations_staffScalarWhereInput[];
    OR?: operations_staffScalarWhereInput[];
    NOT?: operations_staffScalarWhereInput | operations_staffScalarWhereInput[];
    id?: UuidFilter<'operations_staff'> | string;
    staff_name?: StringFilter<'operations_staff'> | string;
    staff_role?: StringFilter<'operations_staff'> | string;
    dashboard_id?: UuidFilter<'operations_staff'> | string;
    user_id?: UuidFilter<'operations_staff'> | string;
    created_at?: DateTimeFilter<'operations_staff'> | Date | string;
    updated_at?: DateTimeFilter<'operations_staff'> | Date | string;
  };

  export type operations_dashboardCreateWithoutOperations_staffInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOperations_dashboardInput;
  };

  export type operations_dashboardUncheckedCreateWithoutOperations_staffInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_dashboardCreateOrConnectWithoutOperations_staffInput = {
    where: operations_dashboardWhereUniqueInput;
    create: XOR<
      operations_dashboardCreateWithoutOperations_staffInput,
      operations_dashboardUncheckedCreateWithoutOperations_staffInput
    >;
  };

  export type userCreateWithoutOperations_staffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOperations_staffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOperations_staffInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOperations_staffInput, userUncheckedCreateWithoutOperations_staffInput>;
  };

  export type operations_dashboardUpsertWithoutOperations_staffInput = {
    update: XOR<
      operations_dashboardUpdateWithoutOperations_staffInput,
      operations_dashboardUncheckedUpdateWithoutOperations_staffInput
    >;
    create: XOR<
      operations_dashboardCreateWithoutOperations_staffInput,
      operations_dashboardUncheckedCreateWithoutOperations_staffInput
    >;
    where?: operations_dashboardWhereInput;
  };

  export type operations_dashboardUpdateToOneWithWhereWithoutOperations_staffInput = {
    where?: operations_dashboardWhereInput;
    data: XOR<
      operations_dashboardUpdateWithoutOperations_staffInput,
      operations_dashboardUncheckedUpdateWithoutOperations_staffInput
    >;
  };

  export type operations_dashboardUpdateWithoutOperations_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOperations_dashboardNestedInput;
  };

  export type operations_dashboardUncheckedUpdateWithoutOperations_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutOperations_staffInput = {
    update: XOR<userUpdateWithoutOperations_staffInput, userUncheckedUpdateWithoutOperations_staffInput>;
    create: XOR<userCreateWithoutOperations_staffInput, userUncheckedCreateWithoutOperations_staffInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOperations_staffInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOperations_staffInput, userUncheckedUpdateWithoutOperations_staffInput>;
  };

  export type userUpdateWithoutOperations_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOperations_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookingCreateWithoutUserInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    car_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    car?: carCreateNestedManyWithoutCompanyInput;
    operations_dashboard?: operations_dashboardCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    car?: carUncheckedCreateNestedManyWithoutCompanyInput;
    operations_dashboard?: operations_dashboardUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type operations_staffCreateWithoutUserInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operations_dashboard: operations_dashboardCreateNestedOneWithoutOperations_staffInput;
  };

  export type operations_staffUncheckedCreateWithoutUserInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    dashboard_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_staffCreateOrConnectWithoutUserInput = {
    where: operations_staffWhereUniqueInput;
    create: XOR<operations_staffCreateWithoutUserInput, operations_staffUncheckedCreateWithoutUserInput>;
  };

  export type operations_staffCreateManyUserInputEnvelope = {
    data: operations_staffCreateManyUserInput | operations_staffCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
  };

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    country?: StringNullableFilter<'company'> | string | null;
    postal_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type operations_staffUpsertWithWhereUniqueWithoutUserInput = {
    where: operations_staffWhereUniqueInput;
    update: XOR<operations_staffUpdateWithoutUserInput, operations_staffUncheckedUpdateWithoutUserInput>;
    create: XOR<operations_staffCreateWithoutUserInput, operations_staffUncheckedCreateWithoutUserInput>;
  };

  export type operations_staffUpdateWithWhereUniqueWithoutUserInput = {
    where: operations_staffWhereUniqueInput;
    data: XOR<operations_staffUpdateWithoutUserInput, operations_staffUncheckedUpdateWithoutUserInput>;
  };

  export type operations_staffUpdateManyWithWhereWithoutUserInput = {
    where: operations_staffScalarWhereInput;
    data: XOR<operations_staffUpdateManyMutationInput, operations_staffUncheckedUpdateManyWithoutUserInput>;
  };

  export type bookingCreateManyCarInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carCreateManyCompanyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    mileage: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_dashboardCreateManyCompanyInput = {
    id?: string;
    dashboard_name: string;
    dashboard_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    mileage?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_dashboardUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operations_staff?: operations_staffUpdateManyWithoutOperations_dashboardNestedInput;
  };

  export type operations_dashboardUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operations_staff?: operations_staffUncheckedUpdateManyWithoutOperations_dashboardNestedInput;
  };

  export type operations_dashboardUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    dashboard_name?: StringFieldUpdateOperationsInput | string;
    dashboard_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_staffCreateManyOperations_dashboardInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_staffUpdateWithoutOperations_dashboardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOperations_staffNestedInput;
  };

  export type operations_staffUncheckedUpdateWithoutOperations_dashboardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_staffUncheckedUpdateManyWithoutOperations_dashboardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyUserInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    car_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postal_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type operations_staffCreateManyUserInput = {
    id?: string;
    staff_name: string;
    staff_role: string;
    dashboard_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUpdateManyWithoutCompanyNestedInput;
    operations_dashboard?: operations_dashboardUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUncheckedUpdateManyWithoutCompanyNestedInput;
    operations_dashboard?: operations_dashboardUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type operations_staffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operations_dashboard?: operations_dashboardUpdateOneRequiredWithoutOperations_staffNestedInput;
  };

  export type operations_staffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    dashboard_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_staffUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_role?: StringFieldUpdateOperationsInput | string;
    dashboard_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CarCountOutputTypeDefaultArgs instead
   */
  export type CarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CarCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Operations_dashboardCountOutputTypeDefaultArgs instead
   */
  export type Operations_dashboardCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Operations_dashboardCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bookingDefaultArgs instead
   */
  export type bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    bookingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use carDefaultArgs instead
   */
  export type carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = carDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use operations_dashboardDefaultArgs instead
   */
  export type operations_dashboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    operations_dashboardDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use operations_staffDefaultArgs instead
   */
  export type operations_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    operations_staffDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
