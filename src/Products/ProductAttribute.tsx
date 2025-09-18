import React, { useState, useEffect } from 'react';
import RadioAttribute from './RadioAttribute';
import DropdownAttribute from './DropdownAttribute';
import ColorAttribute from './ColorAttribute';
import ImageOtherAttributes from './ImageOtherAttributes';

interface ProductAttributeProps {
  productState: {
    product: {
      id: string;
      attributes?: any[];
      variations?: any[];
    };
    attributeValues: string[];
    selectedVariation?: any;
    variantIds: string[];
  };
  setProductState: (value: any) => void;
  stickyAddToCart?: boolean;
}

const ProductAttribute: React.FC<ProductAttributeProps> = ({ productState, setProductState, stickyAddToCart }) => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [soldOutAttributesIds, setSoldOutAttributesIds] = useState<string[]>([]);
  // Mock cart data
  const [cartProducts] = useState<any[]>([]);
  const [cartItem, setCartItem] = useState<any>();

  const checkVariantAvailability = (productObj: any) => {
    productObj?.variations?.forEach((variation: any) => {
      variation?.attribute_values?.forEach((attribute_value: any) => {
        if (!productState.attributeValues?.includes(attribute_value?.id)) {
          setProductState((prev: any) => ({
            ...prev,
            attributeValues: Array.from(new Set([...prev.attributeValues, attribute_value?.id])),
          }));
        }
      });
    });

    if (cartItem?.variation) {
      cartItem?.variation?.attribute_values?.forEach((attribute_val: any) => {
        setVariant(productObj?.variations, attribute_val);
      });
    } else {
      for (const attribute of productObj?.attributes || []) {
        if (productState.attributeValues?.length && attribute?.attribute_values?.length) {
          for (const value of attribute?.attribute_values) {
            if (productState?.attributeValues?.includes(value?.id)) {
              setVariant(productObj?.variations, value);
              break;
            }
          }
        }
      }
    }

    productObj?.variations?.forEach((variation: any) => {
      let attrValues = variation?.attribute_values?.map((attribute_value: any) => attribute_value?.id);
      productObj?.attributes.forEach((attribute: any) => {
        if (attribute.style === 'image') {
          attribute.attribute_values.forEach((attribute_value: any) => {
            if (productState?.attributeValues?.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
              }
            }
          });
        }
      });
    });
  };

  const checkStockAvailable = () => {
    if (productState?.selectedVariation) {
      setProductState((prevState: any) => {
        const tempSelectedVariation = { ...prevState.selectedVariation };
        tempSelectedVariation.stock_status =
          tempSelectedVariation.quantity < prevState.productQty ? 'out_of_stock' : 'in_stock';
        return {
          ...prevState,
          selectedVariation: tempSelectedVariation,
        };
      });
    } else {
      setProductState((prevState: any) => {
        const tempProduct = { ...prevState.product };
        tempProduct.stock_status = tempProduct.quantity < prevState.productQty ? 'out_of_stock' : 'in_stock';
        return {
          ...prevState,
          product: tempProduct,
        };
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkVariantAvailability(productState?.product);
    }, 0);
    return () => clearTimeout(timer);
  }, [productState?.attributeValues, cartItem, selectedOptions]);

  useEffect(() => {
    setCartItem(cartProducts?.find((elem) => elem?.product?.id === productState?.product?.id));
  }, [cartProducts, productState]);

  const setVariant = (variations: any[], value: any) => {
    let tempSelected = [...selectedOptions];
    let tempSoldOutAttributesIds: string[] = [];
    setSoldOutAttributesIds(tempSoldOutAttributesIds);

    const index = tempSelected?.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    if (index === -1) {
      tempSelected.push({ id: Number(value?.id), attribute_id: Number(value?.attribute_id) });
      setSelectedOptions(tempSelected);
    } else {
      tempSelected[index].id = value?.id;
      setSelectedOptions(tempSelected);
    }

    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value: any) => attribute_value?.id);
      let tempVariantIds = tempSelected?.map((variants) => variants?.id);
      setProductState((prev: any) => ({
        ...prev,
        variantIds: tempVariantIds,
      }));
      const doValuesMatch =
        attrValues.length === tempSelected.length && attrValues.every((value: any) => tempVariantIds.includes(value));
      if (doValuesMatch) {
        setProductState((prev: any) => ({
          ...prev,
          selectedVariation: variation,
          variation_id: variation?.id,
          variation,
        }));
        checkStockAvailable();
      }

      if (variation?.stock_status === 'out_of_stock') {
        variation?.attribute_values.forEach((attr_value: any) => {
          if (attrValues.some((value: any) => tempVariantIds.includes(value))) {
            if (attrValues.every((value: any) => tempVariantIds.includes(value))) {
              tempSoldOutAttributesIds.push(attr_value.id);
              setSoldOutAttributesIds([...tempSoldOutAttributesIds]);
            } else if (!tempVariantIds.includes(attr_value.id)) {
              tempSoldOutAttributesIds.push(attr_value.id);
              setSoldOutAttributesIds([...tempSoldOutAttributesIds]);
            }
          } else if (attrValues.length === 1 && attrValues.includes(attr_value.id)) {
            tempSoldOutAttributesIds.push(attr_value.id);
            setSoldOutAttributesIds([...tempSoldOutAttributesIds]);
          }
        });
      }
    });

    productState?.product?.attributes?.forEach((attribute: any) => {
      attribute?.attribute_values?.forEach((a_value: any) => {
        if (a_value.id === value.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });
  };

  return (
    <>
      {productState?.product?.attributes?.map((elem, i) => (
        <div className='product-package' key={i}>
          {stickyAddToCart ? (
            <DropdownAttribute
              elem={elem}
              setVariant={setVariant}
              soldOutAttributesIds={soldOutAttributesIds}
              i={i}
              productState={productState}
            />
          ) : (
            <>
              <div className='product-title'>
                <h4>
                  {elem?.name} : {elem?.selected_value}
                </h4>
              </div>
              {elem?.style === 'radio' ? (
                <RadioAttribute
                  elem={elem}
                  setVariant={setVariant}
                  soldOutAttributesIds={soldOutAttributesIds}
                  i={i}
                  productState={productState}
                />
              ) : elem?.style === 'dropdown' ? (
                <DropdownAttribute
                  elem={elem}
                  setVariant={setVariant}
                  soldOutAttributesIds={soldOutAttributesIds}
                  i={i}
                  productState={productState}
                />
              ) : elem?.style === 'color' ? (
                <ColorAttribute
                  elem={elem}
                  setVariant={setVariant}
                  soldOutAttributesIds={soldOutAttributesIds}
                  productState={productState}
                />
              ) : (
                <ImageOtherAttributes
                  elem={elem}
                  setVariant={setVariant}
                  soldOutAttributesIds={soldOutAttributesIds}
                  productState={productState}
                />
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default ProductAttribute;
