/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createItem } from "../graphql/mutations";
export default function ItemCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    thumbnailImage: "",
    actualImage: "",
    onSale: false,
    price: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [thumbnailImage, setThumbnailImage] = React.useState(
    initialValues.thumbnailImage
  );
  const [actualImage, setActualImage] = React.useState(
    initialValues.actualImage
  );
  const [onSale, setOnSale] = React.useState(initialValues.onSale);
  const [price, setPrice] = React.useState(initialValues.price);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setThumbnailImage(initialValues.thumbnailImage);
    setActualImage(initialValues.actualImage);
    setOnSale(initialValues.onSale);
    setPrice(initialValues.price);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    description: [{ type: "Required" }],
    thumbnailImage: [{ type: "Required" }],
    actualImage: [{ type: "Required" }],
    onSale: [],
    price: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description,
          thumbnailImage,
          actualImage,
          onSale,
          price,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createItem.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ItemCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              thumbnailImage,
              actualImage,
              onSale,
              price,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              thumbnailImage,
              actualImage,
              onSale,
              price,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Thumbnail image"
        isRequired={true}
        isReadOnly={false}
        value={thumbnailImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              thumbnailImage: value,
              actualImage,
              onSale,
              price,
            };
            const result = onChange(modelFields);
            value = result?.thumbnailImage ?? value;
          }
          if (errors.thumbnailImage?.hasError) {
            runValidationTasks("thumbnailImage", value);
          }
          setThumbnailImage(value);
        }}
        onBlur={() => runValidationTasks("thumbnailImage", thumbnailImage)}
        errorMessage={errors.thumbnailImage?.errorMessage}
        hasError={errors.thumbnailImage?.hasError}
        {...getOverrideProps(overrides, "thumbnailImage")}
      ></TextField>
      <TextField
        label="Actual image"
        isRequired={true}
        isReadOnly={false}
        value={actualImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              thumbnailImage,
              actualImage: value,
              onSale,
              price,
            };
            const result = onChange(modelFields);
            value = result?.actualImage ?? value;
          }
          if (errors.actualImage?.hasError) {
            runValidationTasks("actualImage", value);
          }
          setActualImage(value);
        }}
        onBlur={() => runValidationTasks("actualImage", actualImage)}
        errorMessage={errors.actualImage?.errorMessage}
        hasError={errors.actualImage?.hasError}
        {...getOverrideProps(overrides, "actualImage")}
      ></TextField>
      <SwitchField
        label="On sale"
        defaultChecked={false}
        isDisabled={false}
        isChecked={onSale}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              thumbnailImage,
              actualImage,
              onSale: value,
              price,
            };
            const result = onChange(modelFields);
            value = result?.onSale ?? value;
          }
          if (errors.onSale?.hasError) {
            runValidationTasks("onSale", value);
          }
          setOnSale(value);
        }}
        onBlur={() => runValidationTasks("onSale", onSale)}
        errorMessage={errors.onSale?.errorMessage}
        hasError={errors.onSale?.hasError}
        {...getOverrideProps(overrides, "onSale")}
      ></SwitchField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              thumbnailImage,
              actualImage,
              onSale,
              price: value,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
